import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CustomInput from "../components/CustomInput";
import isLocalhost from "../apis/isLocalhost";

const Box = styled.div`
  border: 1px solid rgba(46,54,80,.125);
  border-radius: 1rem;
  flex-grow: 1;
  overflow: auto;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  background-color: white;
  height: 10vh;
  min-width: 610px;
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
  margin: 0px 10px;
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

function RuleCustom({ detail, changeOnOff, changeRuleCustom }) {
  const [customData, setCustomData] = useState();
  const [clear, setClear] = useState(false);
  const toggleColor = { 'y': 'rgb(46, 204, 113)', 'n': '#D8D8D8' };
  const toggleBtnColor = { 'y': '#fff', 'n': '#fff' };
  const toggleMove = { 'y': '.2rem', 'n': 'calc(100% - 1.9rem);' };
  const onOff = { 'y': 'On', 'n': 'Off' };
  const toggleClick = () => {
    let newDetail = {...detail};
    if (detail.state === 'y') {
      newDetail.state = 'n'
     changeOnOff(newDetail);
    }
    else {
      newDetail.state = 'y'
     changeOnOff(newDetail);
    }
  }

  const inputChange = (event, index) => {
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
    let newDetail = { ...detail };
    newDetail.customDetail = JSON.stringify(json);
    newDetail.isModified = 'y';
    changeRuleCustom(newDetail);

    const data = [{
      'id': newDetail.seq,
      'ruleId': newDetail.id,
      'ruleOnOff': newDetail.state,
      'custom': {
        'customDetail': newDetail.customDetail
      }
    }]
    axios.post(`${isLocalhost()}/api/v1/checklist/state`, data);
    setClear(true);
  };

  const onReset = async (event) => {
    event.preventDefault();
    const res = await axios.post(`${isLocalhost()}/api/v1/checklist/reset`,
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
    const json = {
      'ruleId': detail.id,
      'custom': temp
    };
    let newDetail = { ...detail };
    newDetail.customDetail = JSON.stringify(json);
    newDetail.isModified = 'n';
    changeRuleCustom(newDetail);
    setClear(true);
  };

  useEffect(() => {
    setClear(false);
    if (detail && detail.customDetail) {
      setCustomData(JSON.parse(detail.customDetail).custom);
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
                  <CustomInput
                    key={index}
                    custom={item}
                    index={index}
                    clear={clear}
                    inputChange={inputChange}
                  />
                ))}
                <Save onClick={onSave}>Save</Save>
                <Reset onClick={onReset}>Reset</Reset>
              </Form>
            ) : (<h3 style={{ textAlign: "center", lineHeight: "55px" }}>This rule does not support cusomization</h3>)}
          </>
        ) : (
          <h3 style={{ textAlign: "center", lineHeight: "55px" }}>If you click rule card, you can see its detail.</h3>
        )}
      </Box>
    </>
  );
}

export default RuleCustom;