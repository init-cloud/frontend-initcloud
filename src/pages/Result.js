import styled from "styled-components";
import ResultTotal from "../components/ResultTotal";
import ResultCard from "../components/ResultCard";
import Detail from "../components/Detail";
import { useState } from "react";

const Box = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
  height: 466px;
  width: 50%;
  overflow: auto;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);

  &::-webkit-scrollbar {
    width: 10px;
    height: 15px;
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

const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 0.5rem;
  justify-content: center;
`

const Lay = styled.div`
  display: flex;
  gap: 1rem;
`

function Result({ result }) {
  const [detail, setDetail] = useState();
  const onClickCard = (details) => {
    setDetail(details)
  };

  return (
    <div>
      <h1>Result</h1>
      {result ? (
        <ResultTotal
          passed={result.scan.check.passed}
          skipped={result.scan.check.skipped}
          failed={result.scan.check.failed} />
      ) : (
        <ResultTotal />
      )}
      <Lay>
        <Box>
          <CardBox>
            {result ? (
              result.scan.result.map((result, index) => (
                <ResultCard
                  key={index}
                  result={result}
                  onClick={onClickCard}
                />
              ))
            ) : (
              <h3>{"If you upload Terraform file. You can see result here"}</h3>
            )}
          </CardBox>
        </Box>
        <Box>
          {detail ? (
            <Detail detail={detail} />
          ) : (
            <h3 style={{textAlign:"center"}}>If you click result card, you can show it's detail.</h3>
          )}
        </Box>
      </Lay>
    </div>
  );
}

export default Result;