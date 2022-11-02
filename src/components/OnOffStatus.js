import styled from "styled-components";

const Box = styled.div`
  display: flex;
  padding: 10px;
  gap: 1rem;
  align-items: center;
  height: 30px;
`
const Status = styled.span`
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.color};
`
function OnOffStatus() {
  return (
    <Box>
      <Status color="rgb(231, 76, 60)">OFF: 20</Status>
      <Status color="darkorange">Custom: 7</Status>
      <form>
        <label htmlFor="On">On Rule</label>
        <input name="search" id="On" type="radio" />
        <label htmlFor="Off">Off Rule</label>
        <input name="search" id="Off" type="radio" />
        <label htmlFor="Cus">Custom Rule</label>
        <input name="search" id="Cus" type="radio" />
      </form>
    </Box>
  );
}

export default OnOffStatus;