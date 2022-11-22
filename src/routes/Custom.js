import styled, { keyframes } from "styled-components";
import CheckList from "../pages/CheckList";
import RuleDetail from "../pages/RuleDeatil";
import RuleCustom from "../pages/RuleCustom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRef } from "react";

const Service = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  padding: 1rem;
  gap: 1rem;
  overflow: auto;
  background-color: #f5f8fb;
  flex-wrap: wrap;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #C3C5C7;
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
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  min-width: 610px;
  gap: 1rem;
  flex-grow: 1;
`
const boxFade = keyframes`
  0% {
      opacity: 0;
      transform: translate3d(0, 2%, 0);
  }
  to {
      opacity: 1;
      transform: translateZ(0);
  }
`

const Box = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
  flex-direction: column;
  display: flex;
  animation: ${boxFade} ${(props) => props.time};
`

function Custom() {
  const [checkList, setCheckList] = useState();
  const [detail, setDetail] = useState();
  const onOff = useRef([]);

  useEffect(() => {
    const req = async () => {
      const res = await axios.get(
        'https://api.floodnut.com/api/v1/checklist'
      ).catch((err) => {
        console.log(err);
      });
      console.log(res.data);
      setCheckList(res.data.data.docs);
      res.data.data.docs.map((data) => (
        onOff.current.push({
          'id': data.seq,
          'ruleId': data.id,
          'ruleOnOff': data.state,
          'isModified': data.isModified,
          'customDetail': data.customDetail
        })
      ));
    };

    req();
    return () => {
      console.log(onOff.current)
      axios.post('https://api.floodnut.com/api/v1/checklist/state', onOff.current);
    };
  }, []);

  const onClickCard = (rule) => {
    setDetail(rule);
  };

  const changeCustom = (detail) => {
    console.log(detail)
    setDetail(detail);
    const newCheckList = [...checkList];
    newCheckList[detail.seq-1] = detail;
    setCheckList(newCheckList);
    onOff.current[detail.seq-1].ruleOnOff = detail.state;
  }

  const changeRuleCustom = (detail) => {
    const newCheckList = [...checkList];
    newCheckList[detail.seq-1].isModified = detail.isModified;
    newCheckList[detail.seq-1].customDetail = detail.customDetail;
    setCheckList(newCheckList)
    onOff.current[detail.seq-1].isModified = detail.isModified;
    onOff.current[detail.seq-1].customDetail = detail.customDetail;
  }

  return (
    <Service>
      <Layout>
        <Box time={"0.3s"}>
          <CheckList data={checkList} onClickCard={onClickCard} />
        </Box>
      </Layout>
      <Layout>
        <Box time={"0.45s"}>
          <RuleDetail detail={detail} />
        </Box>
        <Box time={"0.6s"}>
          <RuleCustom
            detail={detail}
            changeCustom={changeCustom}
            changeRuleCustom={changeRuleCustom}
          />
        </Box>
      </Layout>
    </Service>
  )
}

export default Custom;