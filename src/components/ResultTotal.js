import styled from "styled-components";

const Total = styled.div`
  display: flex;
  width: 46%;
  height: 25px;
  border: 1px solid #111;
  border: 1px solid rgba(46,54,80,.125);
  border-radius: 10px;
  margin-bottom: 15px;
  overflow: hidden;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
`
const Status = styled.div`
  background-color: ${(props) => props.color};
  flex-grow: ${(props) => props.size};
  color: whitesmoke;
  line-height: 25px;
  font-weight: bold;
  text-align: center;
  padding: 0px 5px 0px 5px;
`

function ResultTotal({ passed = 0, skipped = 0, failed = 0 }) {

  return (
    <Total>
      <Status color={"rgb(46, 204, 113)"} size={passed + 1}>passed :{passed}</Status>
      <Status color={"rgb(241, 196, 15)"} size={skipped + 1}>skipped :{skipped}</Status>
      <Status color={"rgb(231, 76, 60)"} size={failed + 1}>failed : {failed}</Status>
    </Total>
  );
}

export default ResultTotal;