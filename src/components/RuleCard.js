import styled from "styled-components";

const Box = styled.div`
  border: 1px solid rgba(46,54,80,.125);
  border-radius: 1rem;
  height: 100px;
  display: flex;
  flex-grow: 1;
  width: 48%;
  overflow: hidden;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  cursor: pointer;
  min-width: 600px;
  
  &:hover {
    background-color: #D8D8D8;
  }
`
const Info = styled.div`
  padding: 1rem;
  display: flex;
  gap: 5px;
  flex-direction: column;
`

const RuleId = styled.span`
  font-size: 24px;
  font-weight: bold;
`
const State = styled.span`
  font-size: 20px;
  color: ${(props) => props.state};
  margin-left: 10px;
`
const Description = styled.span`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 80%;
`

function RuleCard({ rule, onClickCard }) {
  const sendRule = () => {
    onClickCard(rule);
  };

  const stateColor = {
    "y" : "rgb(46, 204, 113)",
    "n" : "rgb(231, 76, 60)"
  };
  const stateLetter = {
    "y" : "On",
    "n" : "Off"
  };
  return (
    <Box onClick={sendRule}>
      <Info>
        <RuleId>
          {rule.id}
          <State state={stateColor[rule.state]}>{stateLetter[rule.state]}</State>
        </RuleId>
        <Description>{rule.description}</Description>
      </Info>
    </Box>
  );
}

export default RuleCard;