import styled from "styled-components";
import CodeBlock from "../components/CodeBlock";

const A4 = styled.article`
  background-color: white;
  width: 620px;
  height: 820px;
  align-items: center;
  color: #0F3D53;
`
const Content = styled.div`
  padding: 0px 40px;
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
  const stateColor = {
    "passed": "rgb(46, 204, 113)",
    "failed": "rgb(231, 76, 60)"
  };
  const levelColor = {
    "Low": "rgb(46, 204, 113)",
    "Medium": "rgb(241, 196, 15)",
    "High": "rgb(231, 76, 60)"
  };
  const getComplianceNumber = (compliance) => {
    let arr = [];
    compliance?.map((item) => (arr.push(item.complianceNumber)));
    return arr.join(', ');
  }
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
                <Td style={{ color: `${stateColor[data.result]}` }}>{data.result}</Td>
                <TdBold>Severity</TdBold>
                <Td style={{ color: `${levelColor[data.severity]}` }}>{data.severity}</Td>
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
              <Td>{data.type.join(', ')}</Td>
              <TdBold>Problematic location</TdBold>
              <Td>file name: {data.fileName}<br />line: {data.line}</Td>
            </Tr>
            <Tr>
              <TdBold>Resource</TdBold>
              <Td>{data.resource.split('.')[0]}</Td>
              <TdBold>Resource name</TdBold>
              <Td>{data.resource.split('.')[1]}</Td>
            </Tr>
            <Tr>
              <TdBold>Compliance</TdBold>
              <Td>ISMS-P</Td>
              <TdBold>Article</TdBold>
              <Td>{data.compliance?.length > 0 ? getComplianceNumber(data.compliance) : ('x')}</Td>
            </Tr>
          </tbody>
        </Table>
        <SubTitle>DrawBack</SubTitle>
        <Box>
          {data.problematicCode === "No" ? (null) : (
            <>
              <Label>Problematic Code</Label>
              <CodeBlock
                code={data.problematicCode.replaceAll('\t', ' ')}
              />
            </>
          )}
          {data.compliance.length > 0 ? (
            <>
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
                {data.compliance?.map((item, seq) => (
                  <Tr key={seq}>
                    <TdBold>{item.complianceNumber}</TdBold>
                    <Td>{item.description}</Td>
                  </Tr>
                ))}
              </tbody>
            </Table>

            </>
          ) : (null)}
          {data.possibleImpact === "" ? (null) :
            (<>
              <Label>Possible Impact</Label>
              <Txt>{data.possibleImpact}</Txt>
            </>)}
        </Box>
        {data.solution?.length < 2 ? (null) :
          (<>
            <SubTitle>Solution</SubTitle>
            <Box>
              <CodeBlock
                code={data.solutionSample}
              />
              <Txt>{data.solution}</Txt>
            </Box>
          </>)
        }

      </Content>
    </A4>
  );
}

export default RulePdf;