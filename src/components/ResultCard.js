import styled from "styled-components";

const Box = styled.div`
  border: 1px solid rgba(46,54,80,.125);
  border-radius: 1rem;
  flex-grow: 1;
  height: 100px;
  width: 48%;
  display: flex;
  overflow: hidden;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  cursor: pointer;
  min-width: 660px;
  transition: 200ms;

  &:hover {
    filter: brightness(90%);
    background-color: #FAFAFA;
  }
  &:active {
    opacity: 0.9;
    transform: scale(1.008);
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
  border-left: 1px solid rgba(46,54,80,.125);
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 500px;
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
          <Status status={statusColor[result.status]}>{result.status === ""?"UnknowN":result.status}</Status>
        </RuleId>
        <Description>{result.description.slice(1,-1)}</Description>
      </Info>
      <Level level={levelColor[result.level ? result.level : "Low"]}>
        {result.level ? result.level : "Low"}
      </Level>
    </Box>
  );
}

export default ResultCard;