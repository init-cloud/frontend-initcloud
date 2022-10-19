import styled from "styled-components";

const Btn = styled.div`
  border: 2px solid black;
  border-radius: 1rem;
  padding: 1rem;
  display: inline-block;
  height: 4px;
  line-height: 4px;
  font-weight: bold;
  text-align: center; 
  cursor: pointer;
  box-shadow: 0 0 6px 2px rgba(0,0,0,.1);
  margin-right: 5px;
  background-color: white;

  &:hover {
    background-color: #D8D8D8;
  }
`

function Button({ text, onClick }) {

  return (
    <Btn onClick={onClick}>
      {text}
    </Btn>
  )
}

export default Button;