import { useEffect, useRef, useState } from "react";
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
`
const SubTitle = styled.h3`
  margin: 0;
`
const Strong = styled.strong`
  font-size: 26px;
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
  position: relative;
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
  flex-direction: column;
`
const LeftBox = styled.div`
  display: flex;
  height: 95%;
  flex-direction: column;
  flex-grow: 1;
  align-items: baseline;
  justify-content: space-around;
  gap: 0px;
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
  height: 180px;
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
  width: 620px;
  height: 820px;
`
const DemoContainer = styled.div`
  filter: blur(2px) brightness(70%);
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  overflow: hidden;
`
const DemoBox = styled.div`
  position: absolute;
  top: 45%;
  width: 620px;
  z-index: 10;
  color: white;
  word-wrap: break-all;
  text-shadow: 1px 2px 2px rgba(0,0,0,0.2), 0px -3px 20px rgba(255,255,255,0.4);
  font-weight: bold;
  font-size: 38px;
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
  justify-content: center;
  gap: 1rem;
  align-items: center;
`
const Label = styled.label`
  width: 240px;
  height: 40px;
  border-radius: 0.5rem;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  border: 2px solid rgba(46,54,80,.125);
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    filter: brightness(80%);
    background-color: #FAFAFA;
  }
  &:active {
    opacity: 0.9;
    transform: scale(1.008);
  }
`
const Range = styled.input`
  overflow: hidden;
  height: 24px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 300px;
  background: transparent;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid #004D9D;
    border-radius: 10px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 7px;
    background-color: white;
    border: 2px solid #004D9D;
    cursor: pointer;
    box-shadow: -100vw 0 0 100vw #004D9D;
}
`
const Footer = styled.div`
  display: flex;
  gap: 1rem;
`
const Page = styled.div`
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-weight: bold;
  margin-top: 10px;
`
function Report() {
  const [option, setOption] = useState();
  const [lists, setLists] = useState();
  const [reportData, setReportData] = useState();
  const [reportOption, setReportOption] = useState('a');
  const [detailData, setDetailData] = useState();
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const pdf = Pdf();
  const slider = useRef();

  const demoData = {
    date: '2022-12-18',
    csp: 'AWS',
    scanTarget: 'main.tf',
    passed: 32,
    skipped: 5,
    failed: 49,
    score: 77,
    high: 30,
    medium: 5,
    low: 10
  }
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => (setUpdateCount((current) => current + 1)),
    beforeChange: (current, next) => (setSlideIndex(next))
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
      setReportData({ ...res.data.scan });

      if (reportOption === 'f') {
        let arr = res.data.scan.details.filter((item) => (item.result === "failed"));
        setDetailData(arr);
      } else {
        setDetailData([...res.data.scan.details]);
      }
      console.log(res.data.scan);
    };
    req(id);
  }

  const selectOption = (e) => {
    setReportOption(e.target.value);
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

  useEffect(() => {
    if (reportData) {
      if (reportOption === "f") {
        let arr = reportData.details.filter((item) => (item.result === "failed"));
        setDetailData(arr);
      } else {
        setDetailData([...reportData.details])
      }
    }
  }, [reportOption, reportData])

  return (
    <Service>
      <Layout>
        <Box time={"0.3s"}>
          <h1>Report</h1>
          <LeftBox>
            <SubTitle><Strong>Step 1:</Strong><br />Put your account ID</SubTitle>
            <Input onChange={onChange} />
            <SubTitle><Strong>Step 2:</Strong><br />Here is your 10 recent scan.<br />Select Scan result that you want to get a report</SubTitle>
            <Content>
              {lists && lists.length > 0 ? (
                lists?.map((item) => (
                  <RecentResultCard
                    key={item.id}
                    onClick={loadReport}
                    result={item}
                  />
                ))
              ) : (
                <h3 style={{ textAlign: 'center' }}>
                  There are no recent scan results.<br />
                  If you go to the Scan Page and try Scan, you can check the Report.
                </h3>
              )}
            </Content>
            <SubTitle><Strong>Step 3:</Strong><br />Custom your Report</SubTitle>
            <UserOptionBox>
              <Label>
                See All Result
                <input
                  type="radio"
                  value="a"
                  name="select"
                  onChange={selectOption}
                  defaultChecked
                />
              </Label>
              <Label>
                Only Failed Result
                <input
                  type="radio"
                  value="f"
                  name="select"
                  onChange={selectOption}
                />
              </Label>
            </UserOptionBox>
            <Button text="Generate Report PDF" onClick={makePdf}></Button>
          </LeftBox>
        </Box>
      </Layout>
      <Layout>
        <Box time={"0.45s"}>
          <PdfBox>
            {reportData ? (
              <PdfSlider ref={slider} {...settings}>
                <ReportPdf option={option} data={reportData.summary} name={reportData.details[0].fileName}/>
                <TablePdf data={detailData} />
                {detailData?.map((item, seq) => (
                  <RulePdf
                    key={seq}
                    data={item}
                  />
                ))}
              </PdfSlider>
            ) : (
              <>
                <DemoBox>
                  Follow the steps on the left<br />and check the report here
                </DemoBox>
                <DemoContainer>
                  <ReportPdf data={demoData} />
                </DemoContainer>
              </>
            )}
            {reportData ? (
              <Footer>
                <Page>Current Page : {slideIndex + 1}</Page>
                <Range
                  onChange={e => slider.current.slickGoTo(e.target.value)}
                  value={slideIndex}
                  type="range"
                  min={0}
                  max={detailData ? detailData.length + 1 : 1}
                  style={{ zIndex: 10 }}
                />
              </Footer>
            ) : (null)}
          </PdfBox>
        </Box>
      </Layout>
    </Service>
  )
}

export default Report;