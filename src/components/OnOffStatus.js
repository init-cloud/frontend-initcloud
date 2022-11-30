import styled from "styled-components";
import React from "react";

const Box = styled.div`
  display: flex;
  padding: 5px 10px;
  gap: 1rem;
  align-items: center;
  height: 30px;
  background-color: whitesmoke;
`
const Status = styled.span`
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.color};
`
const OnOffStatus = React.memo(({ On, Off, custom }) => {
  return (
    <Box>
      <Status color="rgb(46, 204, 113)">On: {On}</Status>
      <Status color="rgb(231, 76, 60)">OFF: {Off}</Status>
      <Status color="darkorange">Custom: {custom}</Status>
    </Box>
  );
});

export default OnOffStatus;