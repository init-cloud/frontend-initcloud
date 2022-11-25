import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Box = styled.div`
  border: 1px solid rgba(46,54,80,.125);
  border-radius: 1rem;
  flex-grow: 1;
  overflow: auto;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  background-color: white;
  min-width: 610px;
  //justify-content: space-between;
  padding: 10px;
  display: flex;
  gap: 1rem;
  align-items: center;
  &::-webkit-scrollbar {
    width: 10px;
    height: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #E6E6E6;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
  &::-webkit-scrollbar-track-piece:end {
    margin-bottom: 10px;
  }
`
const Top = styled.div`
  display: flex;
  align-items: center;
`
const Toggle = styled.label`
  width: 3.6rem;
  height: 2.2rem;
  display: block;
  border-radius: 2rem;
  position: relative;
  background-color: ${(props) => props.color};
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  cursor: pointer;
  transition: all 0.2s ease-in;
  margin-left: 20px;
`
const ToggleLabel = styled.h2`
  margin-left: 10px;
  width: 40px;
`
const ToggleBtn = styled.span`
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  top: 50%;
  left: ${(props) => props.move};
  transform: translateY(-50%);
  border-radius: 50%;
  background: ${(props) => props.color};
  transition: all 0.2s ease-in;
`
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

const CustomLabel = styled.label`
  font-size: 22px;
  font-weight: bold;
`

const CustomInput = styled.input`
  width: 120px;
  height: 25px;
  margin-left: 10px;
  border-radius: 0.5rem;
  padding-left: 10px;
  border: 2px solid black;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);  
`

const Save = styled.button`
  background-color: white;
  padding: 5px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 0.5rem;
  color: rgb(46, 204, 113);
  border: 1px solid black;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  cursor: pointer;
`

const Reset = styled.button`
  background-color: white;
  padding: 5px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 0.5rem;
  color: rgb(231, 76, 60);
  border: 1px solid black;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  cursor: pointer;
`

function RuleCustom({ detail, changeCustom, changeRuleCustom }) {
  const [customData, setCustomData] = useState();
  const toggleColor = { 'y': 'rgb(46, 204, 113)', 'n': '#D8D8D8' };
  const toggleBtnColor = { 'y': '#fff', 'n': '#fff' };
  const toggleMove = { 'y': '.2rem', 'n': 'calc(100% - 1.9rem);' };
  const onOff = { 'y': 'On', 'n': 'Off' };
  const toggleClick = () => {
    if (detail.state === 'y') {
      detail.state = 'n'
      changeCustom(detail);
    }
    else {
      detail.state = 'y'
      changeCustom(detail);
    }
  }

  const onChange = (event, index) => {
    const newCustom = [...customData];
    newCustom[index].value = event.target.value;
    setCustomData(newCustom);
  };

  const onSave = (event) => {
    event.preventDefault();
    const json = {
      'ruleId': detail.id,
      'custom': customData
    };
    const newDetail = { ...detail };
    newDetail.customDetail = JSON.stringify(json);
    newDetail.isModified = 'y';
    changeRuleCustom(newDetail);

    const data = [{
      'id': detail.seq,
      'ruleId': detail.id,
      'ruleOnOff': detail.state,
      'custom': {
        'customDetail': detail.customDetail
      }
    }]
    axios.post('https://api.floodnut.com/api/v1/checklist/state', data);
  };

  const onReset = async (event) => {
    event.preventDefault();
    const res = await axios.post('https://api.floodnut.com/api/v1/checklist/reset',
      {
        'id': detail.seq,
        'ruleId': detail.id,
        'ruleOnOff': 'n',
        'custom': {
          'isModified': detail.isModified,
          'customDetail': detail.customDetail
        }
      });
    alert('reset');
    const temp = JSON.parse(res?.data.data.custom.customDetail).custom;
    console.log(temp);
    setCustomData(temp);
    const json = {
      'ruleId': detail.id,
      'custom': customData
    };
    const newDetail = { ...detail };
    newDetail.customDetail = JSON.stringify(json);
    newDetail.isModified = 'n';
    changeRuleCustom(newDetail);
  };

  useEffect(() => {
    console.log(detail)
    if (detail && detail.customDetail) {
      setCustomData(JSON.parse(detail.customDetail).custom);
      console.log(customData);
    }
    else {
      setCustomData(null);
    };
  }, [detail]);

  return (
    <>
      <Top>
        <h1>Custom</h1>
        {detail ? (
          <>
            <Toggle onClick={toggleClick} color={toggleColor[detail.state]}>
              <ToggleBtn color={toggleBtnColor[detail.state]} move={toggleMove[detail.state]}></ToggleBtn>
            </Toggle>
            <ToggleLabel>{onOff[detail.state]}</ToggleLabel>
          </>
        ) : (null)}
      </Top>
      <Box>
        {detail ? (
          <>
            {customData ? (
              <Form>
                {customData?.map((item, index) => (
                  <CustomLabel type='reset' key={index}>
                    {item.name} :
                    <CustomInput
                      onChange={(event) => (onChange(event, index))}
                      placeholder={item.value}
                    />
                  </CustomLabel>
                ))}
                <h3>{customData[0].value}</h3>
                <Save onClick={onSave}>
                  <span>Save</span>
                  <i></i>
                </Save>
                <Reset onClick={onReset}>Reset</Reset>
              </Form>
            ) : (<h3 style={{ textAlign: "center", lineHeight: "55px" }}>This rule does not support cusomizaion</h3>)}
          </>
        ) : (
          <h3 style={{ textAlign: "center", lineHeight: "55px" }}>If you click rule card, you can see its detail.</h3>
        )}
      </Box>
    </>
  );
}

export default RuleCustom;