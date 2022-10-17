import styled from "styled-components";

const Box = styled.div`
  border: 1px solid #111;
  border-radius: 1rem;
  height: 100px;
  width: 48%;
  display: flex;
  overflow: hidden;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  cursor: pointer;
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

const Description = styled.span`
  font-size: 18px;
`

function ResultBar({ ruleId, description, level }) {
  console.log("render")
  const levelColor = {
    "Low" : "rgb(46, 204, 113)",
    "Medium" : "rgb(241, 196, 15)",
    "High" : "rgb(231, 76, 60)"
  }

  return (
    <Box>
      <Info>
        <RuleId>{ruleId}</RuleId>
        <Description>{description}</Description>
      </Info>
      <Level level={levelColor[level]}>
        {level}
      </Level>
    </Box>
  );
}

export default ResultBar;