import styled from "styled-components";

const Box = styled.div`
  border: 1px solid #111;
  border-radius: 1rem;
  flex-grow: 1;
  height: 100px;
  width: 48%;
  display: flex;
  overflow: hidden;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  cursor: pointer;
  min-width: 660px;

  &:hover {
    background-color: #D8D8D8;
  }
`
const Info = styled.div`
  flex-grow: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-shrink: 1;
`

const Level = styled.div`
  border-left: 1px solid #111;
  text-align: center;
  line-height: 100px;
  width: 100px;
  background-color: whitesmoke;
  font-size: 23px;
  font-weight: bold;
  color: ${(props) => props.level};
  flex-shrink: 0;
`

const RuleId = styled.span`
  font-size: 24px;
  font-weight: bold;
`
const Status = styled.span`
  font-size: 20px;
  color: ${(props) => props.status};
  margin-left: 10px;
`
const Description = styled.span`
  font-size: 18px;
`

function ResultCard({ result, onClick }) {
  const levelColor = {
    "Low" : "rgb(46, 204, 113)",
    "Medium" : "rgb(241, 196, 15)",
    "High" : "rgb(231, 76, 60)"
  };

  const statusColor = {
    "passed" : "rgb(46, 204, 113)",
    "failed" : "rgb(231, 76, 60)"
  };

  const sendResult = () => {
    onClick(result);
  };

  return (
    <Box onClick={sendResult}>
      <Info>
        <RuleId>
          {result.rule_id}
          <Status status={statusColor[result.status]}>{result.status}</Status>
        </RuleId>
        <Description>{result.description.length > 90 ? `${result.description.slice(0,90)} ...` : result.description}</Description>
      </Info>
      <Level level={levelColor[result.level]}>
        {result.level}
      </Level>
    </Box>
  );
}

export default ResultCard;