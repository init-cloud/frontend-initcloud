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
    width: 15px;
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
  const [custom, setCustom] = useState();
  const [ruleIndex, setRuleIndex] = useState();
  const onOff = useRef([]);

  useEffect(() => {
    const req = async () => {
      const res = await axios.get(
        'https://api.floodnut.com/api/v1/checklist'
        ).catch((err) => {
          console.log(err);
      });
      setCheckList(res.data.data.docs);
      res.data.data.docs.map((data)=>(
        onOff.current.push({'id':data.seq, 'ruleId':data.id, 'ruleOnOff':data.state})
      ));
    };

    req();
    return () => {
      axios.post('https://api.floodnut.com/api/v1/checklist/state', onOff.current);      
    };
  }, []);

  const onClickCard = (rule) => {
    setRuleIndex(rule.seq - 1);
    setDetail(rule);
    setCustom(rule.state);
  };

  const changeCustom = (index, state) => {
    setCustom(state);
    const newCheckList = [...checkList];
    newCheckList[index].state = state;
    setCheckList(newCheckList);
    onOff.current[index].ruleOnOff = state;
  }

  return (
    <Service>
      <Layout>
        <Box time={"0.3s"}>
          <CheckList data={checkList} onClickCard={onClickCard}/>
        </Box>
      </Layout>
      <Layout>
        <Box time={"0.45s"}>
          <RuleDetail detail={detail}/>
        </Box>
        <Box time={"0.6s"}>
          <RuleCustom custom={custom} ruleIndex={ruleIndex} changeCustom={changeCustom}/>
        </Box>
      </Layout>
    </Service>
  )
}

export default Custom;