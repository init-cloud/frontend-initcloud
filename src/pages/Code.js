import { useState } from "react";
import styled from "styled-components";
import CodeBlock from "../components/CodeBlock";

const Box = styled.div`
  border: 1px solid rgba(46,54,80,.125);
  border-radius: 1rem;
  margin-top: 19px;
  padding: 1rem;
  line-height: 55px;
  font-weight: bold;
  font-size: large;
  height: 466px;
  overflow: auto;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  background-color: white;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  
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

function Code({ terraform }) {
  const [text, setText] = useState();

  const handleText = () => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setText(fileReader.result);
    }
    fileReader.readAsText(terraform);
  }

  if (terraform) {
    handleText();
  }

  return (
    <Box>
      {text ? (
        <CodeBlock code={text} />
      ) : (
        <div style={{textAlign: 'center'}}>If you upload Terraform file, you can see it here.</div>
      )}
    </Box>
  );
}

export default Code;