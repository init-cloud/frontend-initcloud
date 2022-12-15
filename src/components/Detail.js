import styled from "styled-components";
import CodeBlock from "./CodeBlock";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 14px;
  overflow: hidden;
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

const Item = styled.span`
  font-size: 18px;
  font-weight: bold;
  span {
    font-size: 15px;
    font-weight : lighter;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 390px;
  overflow: auto;
  
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
const ItemBox = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
`

function Detail({ detail }) {
  const statusColor = {
    "passed": "rgb(46, 204, 113)",
    "failed": "rgb(231, 76, 60)"
  };
  return (
    <Box>
      <RuleId>
        {detail.rule_id}
        <Status status={statusColor[detail.status]}>{detail.status}</Status>
      </RuleId>
      <Content>
        <Item>Description : <span>{detail.description}</span></Item>
        <Item>Lines : <span>{detail.lines}</span></Item>
        <Item>Level : <span>{detail.level}</span></Item>
        <Item>Target Resource : <span>{detail.target_resource}</span></Item>
        <Item>Target File : <span>{detail.target_file}</span></Item>
        {detail.detail !== 'No' ? (
          <ItemBox>
            <Item style={{ textAlign: "center", fontSize: "25px", marginTop: "20px" }}>Detail</Item>
            <CodeBlock code={detail.detail} />
          </ItemBox>
        ) : (
          null)}
      </Content>
    </Box>
  );
}

export default Detail;