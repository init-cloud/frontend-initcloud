import styled, { keyframes } from "styled-components";
import RuleList from "../pages/RuleList";
import RuleDetail from "../pages/RuleDeatil";
import RuleCustom from "../pages/RuleCustom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRef } from "react";
import BaseURL from "../BaseURL"

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

function Checklist() {
  const [checkList, setCheckList] = useState();
  const [detail, setDetail] = useState();
  const onOff = useRef([]);

  useEffect(() => {
    const req = async () => {
      const res = await axios.get(
        `${BaseURL}/checklist`
      ).catch((err) => {
        console.log(err);
      });
      //console.log(res.data);
      setCheckList(res.data.data.docs);
      res.data.data.docs.map((data) => (
        onOff.current.push({
          'id': data.seq,
          'ruleId': data.id,
          'ruleOnOff': data.state
        })
      ));
    };
    console.log(BaseURL);
    req();
    return () => {
      axios.post(`${BaseURL}/checklist/state`, onOff.current);
    };
  }, []);

  const onClickCard = (rule) => {
    setDetail(rule);
  };

  const changeOnOff = (newDetail) => {
    setDetail(newDetail);
    const newCheckList = [...checkList];
    newCheckList[newDetail.seq - 1] = newDetail;
    setCheckList(newCheckList);
    onOff.current[newDetail.seq - 1].ruleOnOff = newDetail.state;
  };

  const changeRuleCustom = (newDetail) => {
    setDetail(newDetail);    
    const newCheckList = [...checkList];
    newCheckList[newDetail.seq - 1] = newDetail;
    setCheckList(newCheckList);
  };

  return (
    <Service>
      <Layout>
        <Box time={"0.3s"}>
          <RuleList data={checkList} onClickCard={onClickCard} />
        </Box>
      </Layout>
      <Layout>
        <Box time={"0.45s"}>
          <RuleDetail detail={detail} />
        </Box>
        <Box time={"0.6s"}>
          <RuleCustom
            detail={detail}
            changeOnOff={changeOnOff}
            changeRuleCustom={changeRuleCustom}
          />
        </Box>
      </Layout>
    </Service>
  )
}

export default Checklist;