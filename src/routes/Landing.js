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
const Div_space = styled.div`
  width:100%;
  height:50px;
  background-color: white;
`
const Div_title = styled.div`
  width:100%;
  height:400px;
  box-sizing: border-box;
  background: #f5f8fb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size : 50px;
`
const Div_body = styled.div`
  width: 100%;
  height:400px;
  box-sizing: border-box;
  background-color: brown;
`
const Div1_1 = styled.div`
  width:30%;
  height:100%;
  float:left;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f8fb;
`
const Div1_2 = styled.div`
  width:70%;
  height: 100%;
  float:right;
  box-sizing: border-box;
  font-size: 40px;
  text-align: center;
  background : #D9D9D9;
  padding : 100px 0;
`
const Div2_1 = styled.div`
  width:70%;
  height: 100%;
  float:left;
  box-sizing: border-box;
  font-size: 40px;
  text-align: center;
  background : #D9D9D9;
  padding : 100px 0;
`
const Div2_2 = styled.div`
  width:30%;
  height:100%;
  float:right;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: #f5f8fb;
`
const Div_footer = styled.div`
  width:100%;
  height:1200px;
  box-sizing: border-box;
  background: #f5f8fb;
  text-align: center;
  font-size : 50px;
`
const Div_footer_title = styled.div`
  width:100%;
  height:100px;
  box-sizing: border-box;
  background: #f5f8fb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size : 50px;
`
const Div_footer_main = styled.div`
  width:100%;
  height:400px;
  box-sizing: border-box;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size : 50px;
`
const Div_footer_thread = styled.div`
  display: flex;
  width:100%;
  height: 500px;
  box-sizing: border-box;
  background: white;
`
const Div_footer_div = styled.div`
  width:30%;
  height: 500px;
  box-sizing: border-box;
  background: #D9D9D9;   
`
const Div_footer_div_1 = styled.div`
  width:100%;
  height:250px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Div_footer_div_2 = styled.div`
  width:100%;
  height:250px;
  box-sizing: border-box;
  padding : 10px;
  font-size : 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Div_footer_space = styled.div`
  width:5%;
  height: 500px;
  box-sizing: border-box;
  background: #f5f8fb;
`
const Sec_Img = styled.img`
  box-sizing: border-box;
  width: 250px;
  height: 250px;
`
const Sec_footer_Img = styled.img`
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
        <NewLink to="/service">
          Go to Service
        </NewLink>
      </Header>
      <SecBox>
        <Div_space></Div_space>
        <Div_title>
          <strong>InitCloud provides security services for IaC.</strong>
        </Div_title>
        <Div_space></Div_space>
        <Div_body>
          <Div1_1>
            <Sec_Img src={`${process.env.PUBLIC_URL}/terraform.png`} alt="terraform logo"/>
          </Div1_1>
          <Div1_2>
            Infrastructure as Code (IaC) can improve<br/><strong>infrastructure consistency</strong> and <strong>speed of deployment</strong><br/> by managing infrastructure as code.
          </Div1_2>
        </Div_body>
        <Div_body>
          <Div2_1>
            <strong>IaC (HCL)</strong> has been named <br/> the number one influential open source <br/> to change the world announced by <strong>Github</strong> in 2022.
          </Div2_1>
          <Div2_2>
            <Sec_Img src={`${process.env.PUBLIC_URL}/github.png`} alt="github logo"/>
          </Div2_2>
        </Div_body>
        <Div_body>
          <Div1_1>
            <Sec_Img src={`${process.env.PUBLIC_URL}/paloalto.png`} alt="paloalto logo"/>
          </Div1_1>
          <Div1_2>
            However, the Paloalto report states that <br/><strong>22%</strong> of IaCs<br/> have <strong>unsafe configurations</strong>.
          </Div1_2>
        </Div_body>
        <Div_space></Div_space>
        <Div_footer>
          <Div_footer_title>
            <strong>Manage IaC Security Threats in InitCloud.</strong>
          </Div_footer_title>
          <Div_footer_main>
            <Sec_footer_Img src={`${process.env.PUBLIC_URL}/initcloud.png`} alt="initcloud logo"/>
          </Div_footer_main>
          <Div_footer_title>
            <strong>InitCloud is different from other services.</strong>
          </Div_footer_title>
          <Div_footer_thread>
            <Div_footer_div>
              <Div_footer_div_1>
                <Sec_Img src={`${process.env.PUBLIC_URL}/div_2.png`} alt="terraform logo"/>
              </Div_footer_div_1>
              <Div_footer_div_2><strong>Provides reports that help <br/>you determine compliance, <br/>such as isms-p</strong>
              </Div_footer_div_2>
            </Div_footer_div>
            <Div_footer_space>
            </Div_footer_space>
            <Div_footer_div>
              <Div_footer_div_1>
                <Sec_Img src={`${process.env.PUBLIC_URL}/div_3.png`} alt="terraform logo"/>
              </Div_footer_div_1>
              <Div_footer_div_2><strong>View security threats  <br/>as well as the architecture</strong></Div_footer_div_2>
            </Div_footer_div>
            <Div_footer_space>
            </Div_footer_space>
            <Div_footer_div>
              <Div_footer_div_1>
                <Sec_Img src={`${process.env.PUBLIC_URL}/div_1.png`} alt="terraform logo"/>
              </Div_footer_div_1>
              <Div_footer_div_2><strong>Scan possible configuration <br/>errors <br/>within Terraform code</strong></Div_footer_div_2>
            </Div_footer_div>
          </Div_footer_thread>
        </Div_footer>
      </SecBox>
    </Box>
  )
}

export default Landing;