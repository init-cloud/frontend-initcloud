import styled from "styled-components";
import { Link } from "react-router-dom";

const Box = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width : 100vw;
  height : 100vh;
  flex-wrap: nowrap;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #CCD2E3;
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
const Header = styled.header`
  height: 100px;
  background-color: #262b40;
  color: whitesmoke;
  display: flex;
  justify-content: first center;
  align-items: center;
  padding: 10px;
  gap: 1rem;
`

const NewLink = styled(Link)`
  border-radius: 1rem;
  background-color: whitesmoke;
  color: #262b40;
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
  height: 20px;
  line-height: 20px;
`
const Circle = styled.div`
  background-color: #f5f8fb;
  border-radius: 15px;
  overflow: hidden;
`
const Img = styled.img`
  height: 50px;
`
const Sec = styled.section`
  background-color: #f5f8fb;
  height: 80vh;
  width: 100%;
`

function Landing() {

  return (
    <Box>
      <Header>
        <Circle>
          <Img src={`${process.env.PUBLIC_URL}/initcloud.png`} alt="init.cloud logo" />
        </Circle>
        <h1 style={{paddingTop:'5px'}}>initCloud</h1>
        <NewLink to="/service">
          Go to Service
        </NewLink>
        <NewLink to="/service">
          Login
        </NewLink>
      </Header>
      <Sec>1</Sec>
      <Sec>2</Sec>
    </Box>
  )
}

export default Landing;