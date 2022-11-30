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
function ReportPdf({option}) {
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
        <Title>Scan Report</Title>
        <SubTitle>0.1 Summary</SubTitle>
        <Table >
          <tbody>
            <Tr>
              <TdBold>Scan Date</TdBold>
              <Td>{data.date}</Td>
              <TdBold>Account</TdBold>
              <Td>{option?(option):("Acoount Name")}</Td>
            </Tr>
            <Tr>
              <TdBold>Cloud Service Provider</TdBold>
              <Td>{data.csp}</Td>
              <TdBold>Scan Target</TdBold>
              <Td>{data.target}</Td>
            </Tr>
          </tbody>
        </Table>
        <Table >
          <tbody>
            <Tr>
              <TdBold>Total Scanned Rules</TdBold>
              <TdBold>Pass Rules</TdBold>
              <TdBold>Failed Rules</TdBold>
            </Tr>
            <Tr>
              <Td>{data.total}</Td>
              <Td>{data.passed}</Td>
              <Td>{data.failed}</Td>
            </Tr>
          </tbody>
        </Table>
        <Graphs>
          <Graph>
            <Label>Scan Result</Label>
            <ApexChart
              type="donut"
              series={[8, 11]}
              options={{
                chart: {
                  height: 200,
                  width: 200,
                }
              }}
            />
          </Graph>
          <Graph>
            <Label>Fail Status by Severity</Label>
            <ApexChart
              type="donut"
              series={[6, 2, 3]}
              options={{
                chart: {
                  height: 200,
                  width: 200,
                }
              }}
            />
          </Graph>
        </Graphs>
        <Label>Fail Status by Resource</Label>
        <Table >
          <tbody>
            <Tr>
              <TdBold>ACG</TdBold>
              <TdBold>server</TdBold>
              <TdBold>NACL</TdBold>
              <TdBold>ASG</TdBold>
              <TdBold>k8s cluster</TdBold>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>1</Td>
              <Td>3</Td>
              <Td>1</Td>
              <Td>1</Td>
            </Tr>
          </tbody>
        </Table>
        <Label>Fail Status by ISMS-P</Label>
        <Table>
          <tbody>
            <Tr>
              <TdBold>2.6 접근통제</TdBold>
              <Td>11</Td>
              <TdBold>2.9 시스템 및 서비스 운영관리</TdBold>
              <Td>1</Td>
            </Tr>
            <Tr>
              <TdBold>2.7 암호화 적용</TdBold>
              <Td>1</Td>
              <TdBold>2.10 시스템 및 서비스 보안관리</TdBold>
              <Td>2</Td>
            </Tr>
          </tbody>
        </Table>
        <Label>Fail Status by Security Threat</Label>
        <Table >
          <tbody>
            <Tr>
              <TdBold>AUDIT AND ACCOUNTABILTY</TdBold>
              <TdBold>ACCESS CONTROL</TdBold>
              <TdBold>MEDIA PROTECTION</TdBold>
              <TdBold>SYSTEM AND COMMUNICATIONS PROTECTION</TdBold>
              <TdBold>SYSYEM AND INFORMATION INTEGRITY</TdBold>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>2</Td>
              <Td>2</Td>
              <Td>4</Td>
              <Td>3</Td>
            </Tr>
          </tbody>
        </Table>
        <Futter>
          <Score>
            <span>Secure score : </span>
            60.7
          </Score>
          <Formular>Vulnerable (lowx1 + medium x 2 + high x 3) / Total</Formular>
        </Futter>
      </Content>
    </A4>
  );
}

export default ReportPdf;