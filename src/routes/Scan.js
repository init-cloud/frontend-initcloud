import styled from "styled-components";
import Code from "../pages/Code";
import Visualize from "../pages/Visualize";
import Result from "../pages/Result";

const Service = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  padding: 1rem;
  gap: 1rem;
  flex-wrap: wrap;
  overflow-y: auto;
`
const Box = styled.div`
  min-height: 500px;
  flex-basis: 400px;
  flex-shrink: 1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

function Scan() {
  return (
    <Service>
      <Box>
        <Code/>    
      </Box>
      <Box>
        <Visualize/>
      </Box>
      <Box>
        <Result />
      </Box>
    </Service>
  )
}

export default Scan;