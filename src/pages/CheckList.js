import styled from "styled-components";

const Box = styled.div`
  border: 1px solid rgba(46,54,80,.125);
  border-radius: 1rem;
  flex-grow: 1;
  min-width: 610px;
  overflow: auto;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  background-color: white;

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

function CheckList() {
  return (
    <>
      <h1>Check List</h1>
      <Box>
      </Box>
    </>
  );
}

export default CheckList;