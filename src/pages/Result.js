import styled from "styled-components";
import ResultTotal from "../components/ResultTotal";
import ResultBar from "../components/ResultBar";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
  gap: 0.5rem;
  height: 380px;
  overflow: auto;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  justify-content: space-between;

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

function Result({ result }) {
  return (
    <div>
      <h1>Result</h1>
      {result?(      
        <ResultTotal
          passed={result.check.passed}
          skipped={result.check.skipped}
          failed={result.check.failed}/>
        ):(
        <ResultTotal/>
      )}
      <Box>
        <ResultBar
          ruleId={"CKV_NCP_1"}
          description={"Ensure HTTP HTTPS Target group defines Healthcheck"}
          level={"High"}
        />
        <ResultBar
          ruleId={"CKV_NCP_2"}
          description={"Ensure every access control groups rule has a description"}
          level={"High"}
        />
        <ResultBar
          ruleId={"CKV_NCP_10"}
          description={"Ensure no NACL allow inbound from 0.0.0.0:0 to port 20"}
          level={"Medium"}
        />
        <ResultBar
          ruleId={"CKV_NCP_12"}
          description={"Ensure no NACL allow inbound from 0.0.0.0:0 to port 3389"}
          level={"Low"}
        />
      </Box>
    </div>
  );
}

export default Result;