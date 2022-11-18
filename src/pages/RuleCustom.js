import styled from "styled-components";

const Box = styled.div`
  border: 1px solid rgba(46,54,80,.125);
  border-radius: 1rem;
  flex-grow: 1;
  overflow: auto;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  background-color: white;
  min-width: 610px;
  //justify-content: space-between;
  padding: 10px;
  display: flex;
  gap: 1rem;
  align-items: center;
  &::-webkit-scrollbar {
    width: 10px;
    height: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #E6E6E6;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
  &::-webkit-scrollbar-track-piece:end {
    margin-bottom: 10px;
  }
`
const Toggle = styled.label`
  width: 6rem;
  height: 3rem;
  display: block;
  border-radius: 2rem;
  position: relative;
  background-color: ${(props) => props.color};
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  cursor: pointer;
  transition: all 0.2s ease-in;
`
const ToggleLabel = styled.h2`
  width: 40px;
`
const ToggleBtn = styled.span`
  width: 2.6rem;
  height: 2.6rem;
  position: absolute;
  top: 50%;
  left: ${(props) => props.move};
  transform: translateY(-50%);
  border-radius: 50%;
  background: ${(props) => props.color};
  transition: all 0.2s ease-in;
`
function RuleCustom({ custom, ruleIndex, changeCustom }) {
  const toggleColor = {'y':'rgb(46, 204, 113)', 'n':'#D8D8D8'};
  const toggleBtnColor = {'y':'#fff', 'n':'#fff'};
  const toggleMove = {'y':'.2rem', 'n':'calc(100% - 2.8rem);'};
  const onOff = {'y':'On', 'n':'Off'};
  const toggleClick = () => {
    if(custom === 'y') {
      changeCustom(ruleIndex, 'n');
    }
    else {
      changeCustom(ruleIndex, 'y');
    }
  }
  return (
    <>
      <h1>Custom</h1>
      <Box>
        {custom ? (
          <>
            <Toggle onClick={toggleClick} color={toggleColor[custom]}>
              <ToggleBtn color={toggleBtnColor[custom]} move={toggleMove[custom]}></ToggleBtn>
            </Toggle>
            <ToggleLabel>{onOff[custom]}</ToggleLabel>
       
          </>
        ) : (
          <h3 style={{ textAlign: "center", lineHeight: "55px" }}>If you click rule card, you can see its detail.</h3>
        )}
      </Box>
    </>
  );
}

export default RuleCustom;