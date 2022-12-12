import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled, { keyframes } from "styled-components";
import Pdf from "../components/Pdf";
import ReportPdf from "../components/ReportPdf";
import Button from "../components/Button"
import RulePdf from "../components/RulePdf";
import TablePdf from "../components/TablePdf"
import jsonData from "../components/json"

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
   flex-grow: 1;
   flex-wrap: wrap;
   gap: 1rem;
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
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 1rem;
`
const Label = styled.label`
  font-size: 20px;
  font-weight: bold;
`
const Input = styled.input`
  width: 240px;
  height: 35px;
  border-radius: 0.5rem;
  padding-left: 10px;
  font-weight: bold;
  border: 2px solid rgba(46,54,80,.125);
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  transition: all 0.5s;
  margin-left: 10px;
  &:focus {
    outline: 0;
    border: 2px solid black;
  }
`
const PdfSlider = styled(Slider)`
  width: 620px;
  height: fit-content;
`
const PdfBox = styled(Box)`
  transition: all 1s;
  transform: scale(0.9);
`

function Report() {
  const [option, setOption] = useState();
  const pdf = Pdf();
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const makePdf = async (e) => {
    e.preventDefault();
    await pdf.viewWithPdf();
  };
  const onChange = (e) => {
    setOption(e.target.value);
  };
  return (
    <Service>
      <Layout>
        <Box time={"0.3s"}>
          <h1>Report</h1>
          <Button text="Generate Report PDF" onClick={makePdf}></Button>
          <Label>
            Account :
            <Input onChange={onChange} />
          </Label>
        </Box>
      </Layout>
      <Layout>
        <PdfBox time={"0.45s"}>
          <PdfSlider {...settings}>
            <ReportPdf option={option} data={jsonData.summary} />
            <TablePdf data={jsonData.details} />
            {jsonData.details.map((item) => (
              <RulePdf
                key={item.ruleID}
                data={item}
              />
            ))}
          </PdfSlider>
        </PdfBox>
      </Layout>
    </Service>
  )
}

export default Report;