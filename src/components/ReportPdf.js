import styled from "styled-components";
import ApexChart from "react-apexcharts"

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
const Graphs = styled.div`
  display: flex;
`
const Graph = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  border: 1px solid #EDEDED;
`
const Td = styled.td`
  border: 1px solid #EDEDED;
  text-align: center;
  padding: 5px 10px;
`
const TdBold = styled.td`
  border: 1px solid #EDEDED;
  text-align: center;
  font-weight: bold;
`
const Label = styled.div`
  width: 200px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #F1F6FC;
  padding: 3px 10px;
  font-size: 12px;
  color: black;
  font-weight: bold;
  margin-top: 10px;
`
const Futter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 5px;
`
const Score = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 27px;
  background: #F1F6FC;
  padding: 3px 20px;
  color: #004D9D;
  width: fit-content;
  span {
    font-size: 12px;
  }
`
const Formular = styled.div`
  color: #9E9E9E;
  font-size: 10px;
`
function ReportPdf({ option, data, name }) {

  return (
    <A4>
      <Header />
      <Content>
        <Title>Scan Report</Title>
        <SubTitle>01. Summary</SubTitle>
        <Table >
          <tbody>
            <Tr>
              <TdBold>Scan Date</TdBold>
              <Td>{data.date}</Td>
              <TdBold>Account</TdBold>
              <Td>{option}</Td>
            </Tr>
            <Tr>
              <TdBold>Cloud Service Provider</TdBold>
              <Td>{data.csp}</Td>
              <TdBold>File Name</TdBold>
              <Td>{name}</Td>
            </Tr>
            <Tr>
              <TdBold>Scan Target</TdBold>
              <Td colSpan={3}>{data.scanTargetHash}</Td>
            </Tr>
          </tbody>
        </Table>
        <Table >
          <tbody>
            <Tr>
              <TdBold>Total Scanned Rules</TdBold>
              <TdBold>Passed Rules</TdBold>
              <TdBold>Skipped Rules</TdBold>
              <TdBold>Failed Rules</TdBold>
            </Tr>
            <Tr>
              <Td>{data.totalScanned}</Td>
              <Td>{data.passed}</Td>
              <Td>{data.skipped}</Td>
              <Td>{data.failed}</Td>
            </Tr>
          </tbody>
        </Table>
        <Graphs>
          <Graph>
            <Label>Scan Result</Label>
            <ApexChart
              type="donut"
              series={[Number(data.passed), Number(data.skipped), Number(data.failed)]}
              options={{
                labels: ["Passed", "Skipped", "Failed"],
              }}
              width="250"
              height="250"
            />
          </Graph>
          <Graph>
            <Label>Fail Status by Severity</Label>
            <ApexChart
              type="donut"
              series={[Number(data.high), Number(data.medium), Number(data.low)]}
              options={{
                labels: ["High", "Medium", "Low"],
              }}
              width="250"
              height="250"
            />
          </Graph>
        </Graphs>
        <Label>Fail Status by Resource</Label>
        <Table >
          <tbody>
            <Tr>
              {data.failedResource?.map((item, seq) => (
                <TdBold key={seq}>{item.name.split('.')[0]}</TdBold>
              ))}
            </Tr>
            <Tr>
              {data.failedResource?.map((item, seq) => (
                <TdBold key={seq}>{item.count}</TdBold>
              ))}
            </Tr>
          </tbody>
        </Table>
        <Label>Fail Status by ISMS-P</Label>
        <Table>
          <tbody>
            <Tr>
              {data.failedCompliance?.map((item, seq) => (
                <TdBold key={seq}>{item.name}</TdBold>
              ))}
            </Tr>
            <Tr>
              {data.failedCompliance?.map((item, seq) => (
                <TdBold key={seq}>{item.count}</TdBold>
              ))}
            </Tr>
          </tbody>
        </Table>
        <Label>Fail Status by Security Threat</Label>
        <Table >
          <tbody>
            <Tr>
              {data.failedSecurityThreat?.map((item, seq) => (
                <TdBold key={seq}>{item.name}</TdBold>
              ))}
            </Tr>
            <Tr>
              {data.failedSecurityThreat?.map((item, seq) => (
                <TdBold key={seq}>{item.count}</TdBold>
              ))}
            </Tr>
          </tbody>
        </Table>
        <Futter>
          <Score>
            <span>Secure score : </span>
            {data.score}
          </Score>
          <Formular>Vulnerable (lowx1 + medium x 2 + high x 3) / Total</Formular>
        </Futter>
      </Content>
    </A4>
  );
}

export default ReportPdf;