import { useEffect, useState } from "react";
import styled from "styled-components";

const CustomLabel = styled.label`
  font-size: 22px;
  font-weight: bold;
`

const CustomPlace = styled.input`
  width:80px;
  height: 25px;
  margin-left: 10px;
  border-radius: 0.5rem;
  padding-left: 10px;
  border: 2px solid black;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);  
`


function CustomInput({custom, index, clear, inputChange}) {
  const [value, setValue] = useState();
  
  const onChange = (event) => {
    inputChange(event, index);
    setValue(event.target.value);
  };

  useEffect(() => {
    if(clear) setValue("");
  }, [clear]);

  return (
    <CustomLabel>
      {custom.name} :
      <CustomPlace
        onChange={(event) => (onChange(event))}
        placeholder={custom.value}
        value={value}
      />
    </CustomLabel>
  );
}

export default CustomInput;