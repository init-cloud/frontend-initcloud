import styled, { keyframes } from "styled-components";
import axios from "axios";
import Code from "../pages/Code";
import Visualize from "../pages/Visualize";
import Result from "../pages/Result";
import Button from "../components/Button";
import { useState } from "react";

const boxFade = keyframes`
  0% {
      opacity: 0;
      transform: translate3d(0, 2%, 0);
  }
  to {
      opacity: 1;
      transform: translateZ(0);
  }
`

const Service = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  padding: 1rem;
  overflow-y: auto;
  flex-direction: column;
  background-color: #f5f8fb;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #CCD2E3;
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
`

const Box = styled.div`
  min-height: 500px;
  min-width: 600px;
  flex-basis: 610px;
  flex-shrink: 1;
  flex-grow: 1;
  flex-direction: column;
  animation: ${boxFade} ${(props) => props.time};
`

function Scan() {
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(false);
  const [tf, setTf] = useState();
  const [result, setResult] = useState();
  const [parse, setParse] = useState()

  const handleChange = (e) => {
    const file = e.target.files[0];
    setTf(file);
  }

  const submit = async () => {
    setError(false)
    const fd = new FormData();
    fd.append("file", tf);
    setLoding(true);
    const response = await axios.post(`https://api.floodnut.com/api/v1/file`, fd, {
      headers: {
        "Content-Type": `multipart/form-data ;`
      }
    }).catch(() => {
      setError(true)
      setLoding(false)
    });
    setResult(response?.data);
    console.log(response?.data);
    setLoding(false);

    let vulnResource = [];
    response?.data.scan.result.map((item) => (
      (item.status === 'failed') ? (vulnResource.push(item.target_resource)) : (null)
    ));
    setParse(response?.data.scan.parse.result.map((item) => {
      if (vulnResource.includes(item.data.id)) item.data['type'] = 'vuln';
      return item;
    }));


  }

  return (
    <Service>
      <Layout>
        <Box time={"0.3s"}>
          <h1>Terraform Scan</h1>
          <label htmlFor="file">
            <Button text={tf?"File Selected":"Choose Terraform File"} onClick={(null)} />
          </label>
          <input id="file" type="file" onChange={(e) => handleChange(e)} multiple="multiple" style={{display: "none"}}/>
          <Button text="Scan" onClick={submit} />
          {loading?<h4 style={{display:"inline"}}>Loading...</h4>:(null)}
          {error?tf?null:<h4 style={{display:"inline"}}>You should select file</h4>:(null)}
          <Code terraform={tf}/>    
        </Box>
        <Box time={"0.45s"}>
          <Visualize elements={parse?parse:(null)}/>
        </Box>
      </Layout>
      <Layout>
        <Box time={"0.6s"}>
          <Result result={result?result:(null)}/>
        </Box>
      </Layout>
    </Service>
  )
}

export default Scan;