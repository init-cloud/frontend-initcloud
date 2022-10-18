import styled from "styled-components";
import axios from "axios";
import Code from "../pages/Code";
import Visualize from "../pages/Visualize";
import Result from "../pages/Result";
import Button from "../components/Button";
import { useState } from "react";

const Service = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  padding: 1rem;
  overflow-y: auto;
  flex-direction: column;
`

const Layout = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 1rem;
`

const Box = styled.div`
  min-height: 500px;
  flex-basis: 400px;
  flex-shrink: 1;
  flex-grow: 1;
  flex-direction: column;
`

function Scan() {
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(false);
  const [tf, setTf] = useState();
  const [result, setResult] = useState();

  const handleChange = (e) => {
    const file = e.target.files[0];
    setTf(file);
  }

  const submit = async () => {
    setError(false)
    const fd = new FormData();
    fd.append("file", tf);
    setLoding(true);
    const response = await axios.post(`file`, fd, {
      headers: {
        "Content-Type": `multipart/form-data ;`
      }
    }).catch(() => {
      setError(true)
      setLoding(false)
    });
    setResult(response.data);
    setLoding(false);
    console.log(response.data)
  }

  return (
    <Service>
      <Layout>
        <Box>
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
        <Box>
          <Visualize/>
        </Box>
      </Layout>
      <Layout>
        <Box>
          <Result result={result?result:(null)}/>
        </Box>
      </Layout>
    </Service>
  )
}

export default Scan;