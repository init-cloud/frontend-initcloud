import styled from "styled-components";

const Box = styled.div`
  border: 1px solid rgba(46,54,80,.125);
  border-radius: 1rem;
  flex-grow: 1;
  overflow: auto;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  background-color: white;
  min-width: 610px;
  min-height: 140px;
  &::-webkit-scrollbar {
    width: 10px;
    height: 15px;
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

function RuleCustom() {
  return (
    <>
      <h1>Custom</h1>
      <Box>
      </Box>
    </>
  );
}

export default RuleCustom;