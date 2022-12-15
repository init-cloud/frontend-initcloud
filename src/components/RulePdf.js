import styled from "styled-components";
import CodeBlock from "../components/CodeBlock";

const A4 = styled.article`
  background-color: white;
  width: 460px;
  height: 650px;
  align-items: center;
  color: #0F3D53;
`
const Content = styled.div`
  padding: 0px 58px;
  display: flex;
  flex-direction: column;
  gap: 6px;
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
function RulePdf({ data }) {

  return (
    <A4>
      <Header />
      <Content>
        <TitleBox>
          <Title>{data.ruleID}</Title>
          <Table>
            <tbody>
              <Tr>
                <TdBold>Result</TdBold>
                <Td style={{ color: "rgb(231, 76, 60)" }}>Failed</Td>
                <TdBold>Severity</TdBold>
                <Td style={{ color: "rgb(46, 204, 113)" }}>{data.severity}</Td>
              </Tr>
            </tbody>
          </Table>
        </TitleBox>
        <SubTitle>Rule Description</SubTitle>
        <Table >
          <tbody>
            <Tr>
              <TdBold>Description</TdBold>
              <Td colSpan={3}>{data.description}</Td>
            </Tr>
            <Tr>
              <TdBold>Type</TdBold>
              <Td>{data.type.join(',')}</Td>
              <TdBold>Problematic location</TdBold>
              <Td>{`file name: ${data.fileName}\nline: ${data.line}`}</Td>
            </Tr>
            <Tr>
              <TdBold>Resource</TdBold>
              <Td>{data.resource}</Td>
              <TdBold>Resource name</TdBold>
              <Td>{data.resourceName}</Td>
            </Tr>
            <Tr>
              <TdBold>Compliance</TdBold>
              <Td>ISMS-P</Td>
              <TdBold>Article</TdBold>
              <Td>2.10.2</Td>
            </Tr>
          </tbody>
        </Table>
        <SubTitle>DrawBack</SubTitle>
        <Box>
          <Label>Problematic Code</Label>
          <CodeBlock
            code={data.problematicCode}
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
          <Label>Possible Impact</Label>
          <Txt>{data.possibleImpact}</Txt>
        </Box>
        <SubTitle>Solution</SubTitle>
        <Box>
          <CodeBlock
            code={data.solutionSample}
          />
          <Txt>{data.solution}</Txt>
        </Box>
      </Content>
    </A4>
  );
}

export default RulePdf;