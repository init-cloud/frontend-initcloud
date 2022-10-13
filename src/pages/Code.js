import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const TextBox = styled.pre`
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
`

function Code() {
  const [tf, setTf] = useState();
  const [text, setText] = useState();

  const handleChange = (e) => {
    const file = e.target.files[0];
    setTf(file);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setText(fileReader.result);
    }
    fileReader.readAsText(file);
  }

  const submit = async () => {
    const fd = new FormData();
    fd.append("file", tf)

    const response = await axios.post(`file`, fd, {
      headers: {
        "Content-Type": `multipart/form-data ;`
      }
    }).catch((error) => console.log(error))
    console.log(response)
  }

  return (
    <div>
      <h1>Terraform Scan</h1>
      <div style={{ flexGrow: "1" }}>
        <input name="file" type="file" onChange={(e) => handleChange(e)} multiple="multiple" />
        <button onClick={submit}>Submit</button>
      </div>
      <div style={{ flexGrow: "3" }}>
        {text ? <TextBox>{text}</TextBox> : (null)}
      </div>
    </div>
  );
}

export default Code;