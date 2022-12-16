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
  font-family: 'SDSamliphopangche_Outline';
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
  height:auto;
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
  word-break:break-all;
`
const DivSpace = styled.div`
  width:100%;
  height:50px;
  background-color: white;
`
const DivTitle = styled.div`
  width:100%;
  height:400px;
  box-sizing: border-box;
  background: #f5f8fb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size : 50px;
`
const DivBody = styled.div`
  width: 100%;
  height:400px;
  box-sizing: border-box;
`
const Div11 = styled.div`
  width:30%;
  height:100%;
  float:left;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(46,54,80,.125);
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  border-radius: 40px;
  background: #f5f8fb;
`
const Div12 = styled.div`
  width:70%;
  height: 100%;
  float:right;
  box-sizing: border-box;
  font-size: 40px;
  text-align: center;
  border: 1px solid rgba(46,54,80,.125);
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  background-color: white;
  border-radius: 40px;
  padding : 100px 0;
`
const Div21 = styled.div`
  width:70%;
  height: 100%;
  float:left;
  box-sizing: border-box;
  font-size: 40px;
  text-align: center;
  border: 1px solid rgba(46,54,80,.125);
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  background-color: white;
  border-radius: 40px;
  padding : 100px 0;
`
const Div22 = styled.div`
  width:30%;
  height:100%;
  float:right;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid rgba(46,54,80,.125);
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  border-radius: 40px;
  background: #f5f8fb;
`
const DivFooter = styled.div`
  width:100%;
  height:1200px;
  box-sizing: border-box;
  background: #f5f8fb;
  text-align: center;
  font-size : 50px;
`
const DivFooterTitle = styled.div`
  width:100%;
  height:100px;
  padding: 70px;
  box-sizing: border-box;
  background: #f5f8fb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size : 50px;
`
const DivFooterMain = styled.div`
  width:100%;
  height:400px;
  box-sizing: border-box;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size : 50px;
`
const DivFooterThread = styled.div`
  display: flex;
  width:100%;
  height: 500px;
  box-sizing: border-box;
  background: white;
  padding: 0px 20px;
`
const DivFooterFiv = styled.div`
  width:30%;
  height: 500px;
  padding-top: 20px;
  border: 1px solid rgba(46,54,80,.125);
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  background-color: white;
  border-radius: 1rem;
  box-sizing: border-box;
`
const DivFooterDiv1 = styled.div`
  width:100%;
  height:250px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DivFooterDiv2 = styled.div`
  width:100%;
  height:250px;
  box-sizing: border-box;
  padding : 10px;
  font-size : 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DivFooterSpace = styled.div`
  width:5%;
  height: 500px;
  box-sizing: border-box;
  background: #f5f8fb;
`
const SecImg = styled.img`
  box-sizing: border-box;
  width: fit-content;
  height: 250px;
`
const SecFooterImg = styled.img`
  box-sizing: border-box;
  width: auto;
  height: auto;
`
function Landing() {

  return (
    <Box>
      <Header>
        <Circle>
          <Img src={`${process.env.PUBLIC_URL}/initcloud.png`} alt="init.cloud logo" />
        </Circle>
        <h1 style={{ paddingTop: '5px' }}>initCloud</h1>
        <NewLink to="/service/scan">
          Go to Service
        </NewLink>
      </Header>
      <SecBox>
        <DivSpace></DivSpace>
        <DivTitle>
          <strong>InitCloud provides security services for IaC.</strong>
        </DivTitle>
        <DivSpace></DivSpace>
        <DivBody>
          <Div11>
            <SecImg src={`${process.env.PUBLIC_URL}/terraform.png`} alt="terraform logo" />
          </Div11>
          <Div12>
            Infrastructure as Code (IaC) can improve<br /><strong>infrastructure consistency</strong> and <strong>speed of deployment</strong><br /> by managing infrastructure as code.
          </Div12>
        </DivBody>
        <DivSpace></DivSpace>
        <DivBody>
          <Div21>
            <strong>IaC (HCL)</strong> has been named <br /> the number one influential open source <br /> to change the world announced by <strong>Github</strong> in 2022.
          </Div21>
          <Div22>
            <SecImg src={`${process.env.PUBLIC_URL}/github.png`} alt="github logo" />
          </Div22>
        </DivBody>
        <DivSpace></DivSpace>
        <DivBody>
          <Div11>
            <SecImg src={`${process.env.PUBLIC_URL}/paloalto.png`} alt="paloalto logo" />
          </Div11>
          <Div12>
            However, the Paloalto report states that <br /><strong>22%</strong> of IaCs<br /> have <strong>unsafe configurations</strong>.
          </Div12>
        </DivBody>
        <DivSpace></DivSpace>
        <DivSpace></DivSpace>
        <DivFooter>
          <DivFooterTitle>
            <strong>Manage IaC Security Threats in InitCloud.</strong>
          </DivFooterTitle>
          <DivFooterMain>
            <SecFooterImg src={`${process.env.PUBLIC_URL}/initcloud.png`} alt="initcloud logo" />
          </DivFooterMain>
          <DivFooterTitle>
            <strong>InitCloud is different from other services.</strong>
          </DivFooterTitle>
          <DivFooterThread>
            <DivFooterFiv>
              <DivFooterDiv1>
                <SecImg src={`${process.env.PUBLIC_URL}/div_1.png`} alt="terraform logo" />
              </DivFooterDiv1>
              <DivFooterDiv2><strong>Scan possible configuration <br />errors <br />within Terraform code</strong></DivFooterDiv2>
            </DivFooterFiv>
            <DivFooterSpace>
            </DivFooterSpace>
            <DivFooterFiv>
              <DivFooterDiv1>
                <SecImg src={`${process.env.PUBLIC_URL}/div_3.png`} alt="terraform logo" />
              </DivFooterDiv1>
              <DivFooterDiv2><strong>View security threats  <br />as well as the architecture</strong></DivFooterDiv2>
            </DivFooterFiv>
            <DivFooterSpace>
            </DivFooterSpace>
            <DivFooterFiv>
              <DivFooterDiv1>
                <SecImg src={`${process.env.PUBLIC_URL}/div_2.png`} alt="terraform logo" />
              </DivFooterDiv1>
              <DivFooterDiv2><strong>Provides reports that help <br />you determine compliance, <br />such as isms-p</strong>
              </DivFooterDiv2>
            </DivFooterFiv>
          </DivFooterThread>
        </DivFooter>
      </SecBox>
    </Box>
  )
}

export default Landing;

