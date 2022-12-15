import styled from "styled-components";

const Box = styled.div`
border: 1px solid rgba(46,54,80,.125);
border-radius: 1rem;
height: 100px;
display: flex;
width: 100%;
overflow: hidden;
box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
cursor: pointer;
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
const Level = styled.div`
  border-right: 1px solid rgba(46,54,80,.125);
  text-align: center;
  line-height: 100px;
  width: 130px;
  background-color: whitesmoke;
  font-size: 23px;
  font-weight: bold;
  color: ${(props) => props.level};
  flex-shrink: 0;
`
const Info = styled.div`
  font-size: 23px;
  line-height: 100px;
  font-weight: bold;
  text-align: center;
  flex-grow: 1;
`

function RecentResultCard({ result, onClick }) {

  const getId = () => {
    onClick(result.id);
  };

  return (
    <Box onClick={getId}>
      <Level>
        {`Score: ${result.score}`}
      </Level>
      <Info>
        {result.scanDateTime}
      </Info>
    </Box>
  );
}

export default RecentResultCard;