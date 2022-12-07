import styled from "styled-components";
import { CodeBlock, rainbow } from "react-code-blocks";

const A4 = styled.article`
  background-color: white;
  width: 620px;
  height: 820px;
  align-items: center;
  color: #0F3D53;
`
const Content = styled.div`
  padding: 0px 58px;
  display: flex;
  flex-direction: column;
  gap: 6px
`
const Header = styled.div`
  width: 100%;
  height: 31px;
  background-color: #004D9D;
`
const Title = styled.h2`
  color: #004D9D;
  margin: 10px 0;
  font-size: 33px;
`
const SubTitle = styled.h3`
  font-size: 15px;
  color: #004D9D;
  margin: 0;
`
const Table = styled.table`
  width: 100%;
  font-size: 10px;
  border-collapse: collapse;
  table-layout: fixed;
  word-break: break-all;
  border: 1px solid #EDEDED;
`
const Tr = styled.tr`
  background-color: white;
  border: 1px solid #EDEDED;
`
const Td = styled.td`
  background-color: white;
  border: 1px solid #EDEDED;
  text-align: center;
  padding: 5px 10px;
`
const TdBold = styled.td`
  background-color: white;
  border: 1px solid #EDEDED;
  text-align: center;
  font-weight: bold;
`
const Label = styled.div`
  text-decoration: underline;
  color: black;
  font-size: 13px;
`
const Box = styled.div`
 background: #F1F6FC;
 padding: 10px;
 display: flex;
 flex-direction: column;
 gap: 5px;
`
const Txt = styled.div`
  color: black;
  font-size: 12px;
  word-break: break-all;
`
const TitleBox = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  gap: 50px;
`
function RulePdf({ option }) {
  const data = {
    "date": "22.11.29",
    "account": "Taein",
    "csp": "ncloud",
    "target": "initCloud.tf",
    "total": 19,
    "passed": 11,
    "failed": 8
  }
  return (
    <A4>
      <Header />
      <Content>
        <TitleBox>
          <Title>CKV_NCP_2</Title>
          <Table>
            <Tr>
              <TdBold>Result</TdBold>
              <Td style={{color:"rgb(231, 76, 60)"}}>Fail</Td>
              <TdBold>Severity</TdBold>
              <Td style={{color:"rgb(46, 204, 113)"}}>Low</Td>
            </Tr>
          </Table>
        </TitleBox>
        <SubTitle>Rule Description</SubTitle>
        <Table >
          <tbody>
            <Tr>
              <TdBold>Description</TdBold>
              <Td colSpan={3}>Ensure every access control groups rule has</Td>
            </Tr>
            <Tr>
              <TdBold>Type</TdBold>
              <Td>AUDIT AND ACCOUNTABILITY</Td>
              <TdBold>Problematic location</TdBold>
              <Td>{`file name: main.tf\nline: 5-10`}</Td>
            </Tr>
            <Tr>
              <TdBold>Resource</TdBold>
              <Td>ncloud_access_control_group</Td>
              <TdBold>Resource name</TdBold>
              <Td>test_acg</Td>
            </Tr>
            <Tr>
              <TdBold>Compliance</TdBold>
              <Td>ISMS-P</Td>
              <TdBold>Article</TdBold>
              <Td>2.10.2</Td>
            </Tr>
          </tbody>
        </Table>
        <SubTitle>Draw Back</SubTitle>
        <Box>
          <Label>Problematic Code</Label>
          <CodeBlock
            language="python"
            text='printf("hello world")'
            theme={rainbow}
            wrapLines={true}
          />
          <Label>Unfulfilled Compliance</Label>
          <Table>
            <colgroup>
              <col style={{ width: '20%' }} />
              <col style={{ width: '80%' }} />
            </colgroup>
            <tbody>
              <Tr>
                <TdBold>ISMS-P</TdBold>
                <TdBold>Details</TdBold>
              </Tr>
              <Tr>
                <TdBold>2.6.1</TdBold>
                <Td>
                  Public access must be blocked to control unauthorized person's access to NKS.
                </Td>
              </Tr>
              <Tr>
                <TdBold>2.6.2</TdBold>
                <Td>
                  Public access should be blocked to control users accessing NKS and accessible locations.
                </Td>
              </Tr>
              <Tr>
                <TdBold>2.6.7</TdBold>
                <Td>
                  Public access should be prevented to control Internet access to NKS, which performs major duties or handles personal information.
                </Td>
              </Tr>
              <Tr>
                <TdBold>2.10.9</TdBold>
                <Td>
                  Public access should be blocked to prevent NKS from receiving malicious code.
                </Td>
              </Tr>
            </tbody>
          </Table>
          <Label>Possible impact</Label>
          <Txt>
            People who don't know the rules can experience inconvenience
            when using infrastructure. When a co-worker tri es to create
            a new rule, he or she can overlap or conflict with it.
          </Txt>
        </Box>
        <SubTitle>Solution</SubTitle>
        <Box>
          <CodeBlock
            language="python"
            text='printf("hello world")'
            theme={rainbow}
            wrapLines={true}
          />
          <Txt>
            A description should be set for the rules of
            all access control groups to help them understand the rules.
          </Txt>
        </Box>
      </Content>
    </A4>
  );
}

export default RulePdf;