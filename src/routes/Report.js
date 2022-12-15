import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled, { keyframes } from "styled-components";
import Pdf from "../components/Pdf";
import ReportPdf from "../components/ReportPdf";
import Button from "../components/Button"
import RulePdf from "../components/RulePdf";
import TablePdf from "../components/TablePdf"
import axios from "axios";
import isLocalhost from "../apis/isLocalhost";
import Swal from "sweetalert2";
import RecentResultCard from "../components/RecentResultCard";

const Service = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  overflow: auto;
  gap: 1rem;
  background-color: #f5f8fb;
    &::-webkit-scrollbar {
    width: 10px;
    height: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #E6E6E6;
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
   width: 49%;
   min-width: 610px;
   flex-grow: 1;
   flex-wrap: wrap;
   gap: 1rem;
`
const SubTitle = styled.h3`
  margin: 0;
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
  height: 100%;
  flex-basis: 610px;
  flex-shrink: 1;
  flex-grow: 1;
  animation: ${boxFade} ${(props) => props.time};
  overflow: visible;
`
const PdfBox = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`
const LeftBox = styled.div`
  display: flex;
  height: 90%;
  flex-direction: column;
  flex-grow: 1;
  align-items: baseline;
  justify-content: space-around;
  gap: 1rem;
  outline: 10px solid transparent;
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
  &:focus {
    outline: 0;
    border: 2px solid black;
  }
`
const Content = styled.div`
  display: flex;
  overflow: auto;
  width: calc(100% - 20px);
  height: 150px;
  padding: 10px;
  border: 1px solid rgba(46,54,80,.125);
  border-radius: 1rem;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  background-color: white;
  overflow: auto;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  align-items: center;

  &::-webkit-scrollbar {
    width: 10px;
    height: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #E6E6E6;
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
const PdfSlider = styled(Slider)`
  width: 460px;
  height: 650px;
`
const DemoContainer = styled.div`
  filter: blur(2px) brightness(70%);
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  overflow: hidden;
`
const DemoBox = styled.div`
  position: absolute;
  width: 460px;
  height: 650px;
  z-index: 10;
  padding-top: 210px;
`
const Message = styled.div`
  color: white;
  word-wrap: break-all;
  text-shadow: 1px 2px 2px rgba(0,0,0,0.2), 0px -3px 20px rgba(255,255,255,0.4);
  font-weight: bold;
  font-size: 32px;
  text-align: center;
`
const UserOptionBox = styled.div`
  display: flex;
  overflow: auto;
  width: 100%;
  height: 70px;
  border: 1px solid rgba(46,54,80,.125);
  border-radius: 1rem;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  background-color: white;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
`

function Report() {
  const [option, setOption] = useState();
  const [lists, setLists] = useState();
  const [reportData, setReportData] = useState();
  const pdf = Pdf();

  const demoData = {
    data: '2022-12-18',
    csp: 'AWS',
    scanTarget: 'main.tf',
    passed: 32,
    skipped: 5,
    failed: 49,
    score: 77
  }

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const makePdf = async (e) => {
    e.preventDefault();
    if (!reportData) {
      Swal.fire({
        title: 'No recent scan results selected',
        text: 'Follow the procedure on the left to print the report.',
        icon: 'error'
      });
      return;
    }
    await pdf.viewWithPdf();
  };
  const onChange = (e) => {
    setOption(e.target.value);
  };
  const loadReport = async (id) => {
    const req = async (id) => {
      const res = await axios.get(
        `${isLocalhost()}/api/v1/report/${id}`
      ).catch((err) => {
        console.log(err);
      });
      setReportData(res.data.scan);
      console.log(res.data.scan);
    };
    req(id);
  }

  useEffect(() => {
    const req = async () => {
      const res = await axios.get(
        `${isLocalhost()}/api/v1/history`
      ).catch((err) => {
        console.log(err);
      });
      setLists(res.data.scan);
      console.log(res.data.scan);
    };
    req();
  }, []);

  return (
    <Service>
      <Layout>
        <Box time={"0.3s"}>
          <h1>Report</h1>
          <LeftBox>
            <SubTitle>Step 1:<br />Put your account ID</SubTitle>
            <Input onChange={onChange} />
            <SubTitle>Step 2:<br />Here is your 10 recent scan.<br />Select Scan result that you want to get a report</SubTitle>
            <Content>
              {lists ? (
                lists?.map((item) => (
                  <RecentResultCard
                    key={item.id}
                    onClick={loadReport}
                    result={item}
                  />
                ))
              ) : (
                <h2>loading</h2>
              )}
            </Content>
            <SubTitle>Step 3:<br />Custom your Report</SubTitle>
            <UserOptionBox></UserOptionBox>
            <Button text="Generate Report PDF" onClick={makePdf}></Button>
          </LeftBox>
        </Box>
      </Layout>
      <Layout>
        <Box time={"0.45s"}>
          <PdfBox>
            {reportData ? (
              <PdfSlider {...settings}>
                <ReportPdf option={option} data={reportData.summary} />
                <TablePdf data={reportData.details} />
                {reportData.details?.map((item, seq) => (
                  <RulePdf
                    key={seq}
                    data={item}
                  />
                ))}
              </PdfSlider>
            ) : (
              <>
                <DemoContainer>
                  <ReportPdf data={demoData} />
                </DemoContainer>
              </>
            )}
          </PdfBox>
        </Box>
      </Layout>
    </Service>
  )
}

export default Report;