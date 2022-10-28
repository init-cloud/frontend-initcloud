import styled, { keyframes } from "styled-components";
import CheckList from "../pages/CheckList";
import RuleDetail from "../pages/RuleDeatil";
import RuleCustom from "../pages/RuleCustom";
import { useEffect, useState } from "react";
import axios from "axios";

const Service = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  padding: 1rem;
  gap: 1rem;
  overflow-y: auto;
  background-color: #f5f8fb;
  flex-direction: row;
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
   flex-grow: 1;
   width: 48%;
   min-width: 700px;
   gap: 1rem;
`
const boxFade = keyframes`
  0% {
      opacity: 0;
      transform: translate3d(0, 3%, 0);
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
  overflow: hidden;
`

function Custom() {
  const [checkList, setCheckList] = useState();

  useEffect(() => {
    const req = async () => {
      const res = await axios.get(
        'http://localhost:8080/docs'
        ).catch((err) => {
          console.log(err);
        });
      setCheckList(res?.data);
    };
    req();
  }, []);

  return (
    <Service>
      <Layout>
        <Box time={"0.3s"}>
          <CheckList data={checkList}/>
        </Box>
      </Layout>
      <Layout>
        <Box time={"0.45s"} style={{flexGrow: 2}}>
          <RuleDetail />
        </Box>
        <Box time={"0.6s"}>
          <RuleCustom />
        </Box>
      </Layout>
    </Service>
  )
}

export default Custom;