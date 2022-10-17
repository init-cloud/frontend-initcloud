import { useState } from "react";
import styled from "styled-components";

const TextBox = styled.pre`
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
  font-weight: bold;
  height: 415px;
  overflow: auto;
  font-size: large;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: grey;
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
    <div>
      <TextBox>{text ? text : "If you upload Terraform file.\nYou can see it here"}</TextBox>
    </div>
  );
}

export default Code;