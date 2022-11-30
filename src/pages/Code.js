import { useState } from "react";
import styled, { keyframes } from "styled-components";
import CodeBlock from "../components/CodeBlock";
import JSZip from "jszip";
import { useEffect } from "react";
import Dropdown from "../components/Dropdown";

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
const Box = styled.div`
  border: 1px solid rgba(46,54,80,.125);
  border-radius: 1rem;
  margin-top: 19px;
  padding: 15px;
  padding-right: 5px;
  line-height: 55px;
  font-weight: bold;
  font-size: large;
  height: 466px;
  overflow: hidden;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  background-color: white;
  font-family: 'M PLUS Rounded 1c', sans-serif;
`
const FileName = styled.div`
  height: 25px;
  top: -5px;
  left: -5px;
  width: fit-content;
  line-height: 25px;
  position: relative;
  border: 1px solid black;
  border-radius: 1rem;
  font-weight: bold;
  z-index: 999;
  background-color: white;
  padding: 0px 10px;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  animation: ${boxFade} 0.35s;
`
const CodeBox = styled.div`
  position: relative;
  top: -20px;
  height: inherit;
  overflow: auto;
  
  &::-webkit-scrollbar {
    width: 10px;
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
const DropBar = styled.div`
  left: -3px;
  height: 25px;
  width: fit-content;
  border: 1px solid black;
  background-color: white;
  padding: 0px 10px;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  border-radius: 1rem;
  line-height: 25px;

  position: relative;
  z-index: 998;
  &:hover {
    background-color: #848484;
    color: whitesmoke;
  }
  &:active {
    opacity: 0.3;
    transform: scale(1.05);
  }
`

function Code({ terraform }) {
  const [tfZip, setTfZip] = useState(true);
  const [zips, setZips] = useState([]);
  const [zipFiles, setZipFiles] = useState([]);
  const [dropdownVis, setDropdownVis] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleText = () => {
    setTfZip(true);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setZipFiles((current) => [...current, fileReader.result])
    }
    fileReader.readAsText(terraform);
  }

  const handleFiles = (zip, outId) => {
    zip.forEach((relativePath, entry) => {
      if (!entry.dir) {
        setZips((current) => ([...current, relativePath]));
        zip.file(entry.name).async("base64").then((base64Text) => (
          setZipFiles((current) => [...current, atob(base64Text)])
        ))
      }
    })
  }

  const handleZip = () => {
    setTfZip(false);
    let zipIns = null;
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      JSZip.loadAsync(e.target.result).then((zip) => {
        zipIns = zip;
        handleFiles(zipIns, 'zip_contents');
      })
    }
    fileReader.onerror = (e) => {
      alert("File upload error");
    }
    fileReader.readAsArrayBuffer(terraform);
  }

  const listClick = (event) => {
    setDropdownVis((current) => !current)
    const clicked = zips.indexOf(event.target.innerText);
    setCurrentIndex(clicked);
  }

  useEffect(() => {
    setZips([]);
    setCurrentIndex(0);
    setZipFiles([]);
    if (terraform) {
      if (terraform.name.split('.')[1] === "zip") handleZip();
      else handleText();
    }
  }, [terraform])

  return (
    <Box>
      {terraform ? (
        tfZip ? (
          <FileName>{terraform.name}</FileName>
        ) : (
          <>
            <FileName onClick={e => setDropdownVis((current) => !current)}>{zips[currentIndex]}</FileName>
            <Dropdown visibility={dropdownVis}>
              {zips.map((item, index) => (
                index === currentIndex ? (null) : (
                  <DropBar
                    key={item}
                    onClick={(event) => listClick(event)}
                  >{item}</DropBar>
                )
              ))}
            </Dropdown>
          </>
        )) : (null)}
      <CodeBox>
        {terraform ? (
          <CodeBlock code={zipFiles[currentIndex]} />
        ) : (
          <div style={{ textAlign: 'center' }}>If you upload Terraform file, you can see it here.</div>
        )}
      </CodeBox>
    </Box>
  );
}

export default Code;