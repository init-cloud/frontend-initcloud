import styled, { keyframes } from "styled-components";
import Pdf from "../components/Pdf";
import ReportPdf from "../components/ReportPdf";

const Service = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  padding: 1rem;
  overflow-y: auto;
  background-color: #f5f8fb;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #C3C5C7;
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
`
const Layout = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 1rem;
   overflow: auto;
`
const boxFade = keyframes`
  0% {
      opacity: 0;
      transform: translate3d(0, 3%, 0);
  }
  to {
      opacity: 1;
      transform: translateZ(0);
  }
`
const Box = styled.div`
  min-height: 500px;
  min-width: 610px;
  flex-basis: 610px;
  flex-shrink: 1;
  flex-grow: 1;
  flex-direction: column;
  animation: ${boxFade} ${(props) => props.time};
`
const Button = styled.button`
`

function Report() {
  const pdf = Pdf();

  const makePdf = async (e) => {
    e.preventDefault()
    await pdf.viewWithPdf()
  };

  return (
    <Service>
      <Layout>
        <Box time={"0.3s"}>
          <h1>Report</h1>
          <Button onClick={makePdf}>Make Report</Button>
        </Box>
      </Layout>
      <Layout>
        <ReportPdf/>
      </Layout>
    </Service>
  )
}

export default Report;