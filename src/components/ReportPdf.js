import styled from "styled-components";

const A4 = styled.article`
  background-color: white;
  width: 620px;
  height: 876px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //padding: 12px;
`
const Img = styled.img`
  width: inherit;
`

function ReportPdf({title}) {
  return (
    <A4>
      <Img src={`${process.env.PUBLIC_URL}/graph.png`} alt="graph" />
      <h1>initCloud Document</h1>
      <h3>{title?title:"title"}</h3>
      <span>Don't do that</span>
      <h3>Statistics</h3>
      <span>IaC 1: 0%</span>
      <span>IaC 2: 12%</span>
      <span>IaC 3: 999%</span>
    </A4>
  );
}

export default ReportPdf;