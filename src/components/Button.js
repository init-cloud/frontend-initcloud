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
  margin-right: 5px;

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