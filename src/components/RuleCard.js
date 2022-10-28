import styled from "styled-components";

const Box = styled.div`
  border: 1px solid rgba(46,54,80,.125);
  border-radius: 1rem;
  flex-grow: 1;
  height: 100px;
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

const RuleId = styled.span`
  font-size: 24px;
  font-weight: bold;
`

const Description = styled.span`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-grow: 1;
  max-width: 620px;
`

function RuleCard({ rule }) {
  return (
    <Box>
      <Info>
        <RuleId>{rule.id}</RuleId>
        <Description>{rule.description}</Description>
      </Info>
    </Box>
  );
}

export default RuleCard;