import styled, { keyframes } from "styled-components";
import axios from "axios";
import Code from "../pages/Code";
import Visualize from "../pages/Visualize";
import Result from "../pages/Result";
import Button from "../components/Button";
import ResourceModal from "../components/ResourceModal";
import { useState } from "react";
import { useCallback } from "react";

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
  gap: 1rem;
  &::-webkit-scrollbar {
    width: 12px;
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

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const Provider = styled.select`
  padding: 3px 5px;
  font-size: 20px;
  background-color: white;
  color: ${(props) => props.color};
  border: 2px solid rgba(46,54,80,.125);
  box-shadow: 0 0 6px 2px rgba(0,0,0,.1);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  &:focus {
    outline: 0;
  }
`

const Message = styled.span`
  margin-left: 5px;
  font-size: 20px;
  font-weight: bold;
`

function Scan() {
  const [loading, setLoding] = useState(false);
  const [tf, setTf] = useState();
  const [provider, setProvider] = useState();
  const [result, setResult] = useState();
  const [parse, setParse] = useState();
  const [modalOn, setModalOn] = useState(false);
  const [modalData, setModalData] = useState();
  const providerColor = {
    'aws': 'darkorange',
    'ncloud': 'rgb(46, 204, 113)'
  };
  const handleChange = (e) => {
    const file = e.target.files[0];
    setTf(file);
    setParse(null);
    setResult(null);
  }

  const submit = async () => {
    if (!provider) {
      alert('You shold select provider');
      return;
    }
    const fd = new FormData();
    fd.append("file", tf);
    setLoding(true);
    const response = await axios.post(`https://api.floodnut.com/api/v1/file/${provider}`, fd, {
      headers: {
        "Content-Type": `multipart/form-data ;`
      }
    }).catch(() => {
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

  const onNodeClick = useCallback((id) => {
    const results = [];
    result.scan.result.map((item) => {
      if (item.target_resource === id) {
        results.push(item)
      }
      return 0
    })
    setModalOn(true);
    setModalData(results);
  }, [result])

  const modalClose = () => {
    setModalOn(false);
  }

  const providerChange = (event) => {
    setProvider(event.target.value);
  }

  return (
    <Service>
      <Layout>
        <Box time={"0.3s"}>
          <h1>Terraform Scan</h1>
          <ButtonBox>
            <label htmlFor="file">
              <Button text={tf ? "File Selected" : "Choose Terraform File"} onClick={(null)} />
            </label>
            <input id="file" type="file" onChange={(e) => handleChange(e)} multiple="multiple" style={{ display: "none" }} />
            <Button text="Scan" onClick={submit} />
            <Provider onChange={(event) => providerChange(event)} color={providerColor[provider]}>
              <option value={null}>Select Provider</option>
              <option value="aws">aws</option>
              <option value="ncloud">ncloud</option>
            </Provider>
            {loading ? <Message>Loading...</Message> : (null)}
          </ButtonBox>
          <Code terraform={tf} />
        </Box>
        <Box time={"0.45s"}>
          <Visualize elements={parse ? parse : (null)} onNodeClick={onNodeClick} />
          <ResourceModal openModal={modalOn} closeModal={modalClose} data={modalData} />
        </Box>
      </Layout>
      <Layout>
        <Box time={"0.6s"}>
          <Result result={result ? result : (null)} />
        </Box>
      </Layout>
    </Service>
  )
}

export default Scan;