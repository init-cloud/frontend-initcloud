import styled from "styled-components";

const A4 = styled.article`
  background-color: white;
  width: 620px;
  min-height: 820px;
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
const SubTitle = styled.h3`
  font-size: 15px;
  color: #004D9D;
  padding: 20px 0px;
  margin: 0;
`
const Table = styled.table`
  width: 100%;
  font-size: 7px;
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
const Th = styled.th`
  background-color: #004D9D;
  border: 1px solid white;
  color: white;
  text-align: center;
  font-weight: bold;
`
function RulePdf({ data }) {
  const getComplianceNumber = (compliance) => {
    let arr = [];
    compliance?.map((item) => (arr.push(item.complianceNumber)));
    return arr.join(', ');
  }
  return (
    <A4>
      <Header />
      <Content>
        <SubTitle>02. Scan Details</SubTitle>
        <Table>
          <colgroup>
            <col style={{ width: '16%' }} />
            <col style={{ width: '31%' }} />
            <col style={{ width: '12%' }} />
            <col style={{ width: '11%' }} />
            <col style={{ width: '13%' }} />
            <col style={{ width: '11%' }} />
          </colgroup>
          <tbody>
            <Tr>
              <Th>RuleID</Th>
              <Th>Policy</Th>
              <Th>Severity</Th>
              <Th>ScanResult</Th>
              <Th>ControlName</Th>
              <Th>Article</Th>
            </Tr>
            {data?.map((item, seq) => (
              <Tr key={seq}>
                <Th>{item.ruleID}</Th>
                <Td>{item.description === "" ? "TBD" : item.description}</Td>
                <Td>{item.severity}</Td>
                <Td>{item.result}</Td>
                <Td>ISMS-P</Td>
                <Td>{item.compliance?.length > 0 ? getComplianceNumber(item.compliance) : ('x')}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </A4>
  );
}

export default RulePdf;