import styled from "styled-components";

const Box = styled.div`
  padding: 1rem;
`
const TextBox = styled.pre`
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
  font-weight: bold;
  height: 415px;
  overflow: auto;
  
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
function Result({result}) {

  return (
    <Box>
      <h1>Result</h1>
      <TextBox>{result?result:"If you scan Terraform file.\nYou can see it here"}</TextBox>
    </Box>
  );
}

export default Result;