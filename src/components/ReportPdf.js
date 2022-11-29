import styled from "styled-components";

const A4 = styled.article`
  background-color: white;
  width: 620px;
  height: 876px;
  display: flex;
  flex-direction: column;
  align-items: center;
`


function ReportPdf({title}) {
  return (
    <A4>
      <h1>initCloud Document</h1>
      <h3>{title?title:"title"}</h3>
    </A4>
  );
}

export default ReportPdf;