import styled from "styled-components";
import React from "react";

const Box = styled.div`
  border: 1px solid rgba(46,54,80,.125);
  border-radius: 1rem;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  width: 48%;
  overflow: hidden;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  cursor: pointer;
  min-width: 600px;
  transition: 200ms;
  
  &:hover {
    filter: brightness(80%);
    background-color: #FAFAFA;
  }
  &:active {
    opacity: 0.9;
    transform: scale(1.008);
  }
`
const Info = styled.div`
  padding: 1rem;
  display: flex;
  gap: 5px;
  flex-direction: column;
  flex-grow: 1;
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
  max-width: 400px;
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

const RuleCard = React.memo(({ rule, onClickCard }) => {
  const sendRule = () => {
    onClickCard(rule);
  };
  const levelColor = {
    "Low" : "rgb(46, 204, 113)",
    "Medium" : "rgb(241, 196, 15)",
    "High" : "rgb(231, 76, 60)"
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
          <State state="darkorange">{rule.isModified === 'y'?"Custom":null}</State>
        </RuleId>
        <Description>{rule.description === "" ? ("TBD") : rule.description}</Description>
      </Info>
      <Level level={levelColor[rule.level]}>
        {rule.level}
      </Level>
    </Box>
  );
});

export default RuleCard;