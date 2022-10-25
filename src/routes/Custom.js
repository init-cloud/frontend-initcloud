import styled, { keyframes } from "styled-components";
import CheckList from "../pages/CheckList";

const Service = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  padding: 1rem;
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
  min-height: 500px;
  min-width: 610px;
  flex-basis: 610px;
  flex-shrink: 1;
  flex-grow: 1;
  flex-direction: column;
  display: flex;
  animation: ${boxFade} ${(props) => props.time};
  padding: 0 1rem;
`

function Custom() {

  return (
    <Service>
      <Layout style={{flexDirection : "row"}}>
        <Box time={"0.3s"}>
          <CheckList />
        </Box>
      </Layout>
      <Layout>
        <Box time={"0.45s"}>
          <h1>Detail</h1>
        </Box>
        <Box time={"0.6s"}>
          <h1>Custom</h1>
        </Box>
      </Layout>
    </Service>
  )
}

export default Custom;