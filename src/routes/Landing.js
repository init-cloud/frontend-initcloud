import styled from "styled-components";
import { Link } from "react-router-dom";

const Box = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width : 100vw;
  height : 100vh;
  flex-wrap: nowrap;
  overflow: hidden;
`
const Header = styled.header`
  height: 100px;
  background-color: #262b40;
  color: whitesmoke;
  display: flex;
  justify-content: first center;
  align-items: center;
  padding: 8px;
  gap: 2rem;
`

const NewLink = styled(Link)`
  font-weight: bold;
  border-radius: 1rem;
  background-color: whitesmoke;
  color: #262b40;
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
  height: 20px;
  line-height: 20px;
  transition: all 0.3s;
  &:hover {
    background-color: #262b40;
    border: 4px solid white;
    color: white;
  }
`
const Circle = styled.div`
  background-color: #f5f8fb;
  border-radius: 15px;
  width: 80px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: 2px 0px;
`
const Img = styled.img`
  height: 52px;
`

const SecBox = styled.div`
  overflow: auto;
  
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

const Sec = styled.section`
  background-color: #f5f8fb;
  height: 80vh;
  width: 100%;
  font-size: 50px;
  text-align: center;
  line-height: 80vh;
`

function Landing() {

  return (
    <Box>
      <Header>
        <Circle>
          <Img src={`${process.env.PUBLIC_URL}/initcloud.png`} alt="init.cloud logo" />
        </Circle>
        <h1 style={{ paddingTop: '5px' }}>initCloud</h1>
        <NewLink to="/service">
          Go to Service
        </NewLink>
      </Header>
      <SecBox>
        <Sec><strong>IaC</strong> is <strong>"Trend"</strong>. You can't get out of here.</Sec>
        <Sec><strong>Terraform</strong> is <strong>"God"</strong> and <strong>InitCloud</strong> is <strong>"Invincible"</strong>.</Sec>
        <Sec>Naver, Kakao, Toss, <strong>InitCloud</strong> Let's Go!</Sec>
      </SecBox>
    </Box>
  )
}

export default Landing;