import styled from "styled-components";
import CodeBlock from "../components/CodeBlock";

const Box = styled.div`
  border: 1px solid rgba(46,54,80,.125);
  border-radius: 1rem;
  flex-grow: 1;
  overflow: hidden;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  background-color: white;
  min-width: 610px;
  height: 57vh;
  display: flex;
  flex-direction: column;
  padding: 10px;
`
const Top = styled.span`
  margin-bottom: 5px;
  display: flex;
`
const RuleID = styled.h1`
  font-size: 24px;
  font-size: 24px;
  font-weight: bold;
`
const Filters = styled.ul`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 5px;
  list-style: none;
  margin: 0px;
  flex-wrap: wrap;
`
const Filter = styled.li`
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  height: 20px;
  color: whitesmoke;
  line-height: 20px;
  padding: 0px 12px;
  text-align: center;
  border: 1px solid ${(props) => props.color};
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  border-radius: 10px;
  background-color: ${(props) => props.color};
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
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
const Item = styled.span`
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
`
const Description = styled.span`
  font-size: 15px;
  font-weight : lighter;
`
const ItemBox = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
`

function RuleDetail({ detail }) {
  const SECURITY_TYPE = {
    "INCIDENT RESPONSE": "#a5dff9",
    "ACCESS CONTROL": "#ef5285",
    "MEDIA PROTECTION": "#60c5ba",
    "IDENTIFICATION AND AUTHENTICATION": "#75D701",
    "AUDIT AND ACCOUNTABILITY": "#2b90d9",
    "CONFIGURATION MANAGEMENT": "#ff5f2e",
    "SYSTEM AND INFORMATION INTEGRITY": "#fcbe32",
    "SYSTEM AND COMMUNICATIONS PROTECTION": "#282c37",
    "CONTINGENCY PLANNING": "#5c196b",
    "PERFORMANCE IMPROVEMENTS": "#ef9e9f",
    "LOGIC ERROR": "#004e66"
  };
  return (
    <>
      <h1>Detail</h1>
      <Box>
        {detail ? (
          <>
            <Top>
              <RuleID>{detail.id}</RuleID>
              <Filters>
                {detail.tags?.map((item, index) => (
                  <Filter
                    key={index}
                    color={SECURITY_TYPE[item.tag] || "black"}>
                    {item.tag}
                  </Filter>
                ))}
              </Filters>
            </Top>
            <Content>
              {detail.description === "" ? (
                <ItemBox>
                  <Item>Description</Item>
                  <Description>TBD</Description>
                </ItemBox>
              ) : (
                <ItemBox>
                  <Item>Description</Item>
                  <Description>{detail.description}</Description>
                </ItemBox>
              )}
              {detail.explanation === "" ? (null) :
                <ItemBox>
                  <Item>Explanation</Item>
                  <Description>{detail.explanation}</Description>
                </ItemBox>
              }
              {detail.possibleImpact === "" || detail.possibleImpact === "\n" ? (null) :
                <ItemBox>
                  <Item>Possible Impact</Item>
                  <Description>{detail.possibleImpact}</Description>
                </ItemBox>
              }
              {detail.insecureExample === "" || detail.insecureExample === "\n" ? (null) :
                <ItemBox>
                  <Item>Insecure Example</Item>
                  <CodeBlock code={detail.insecureExample} />
                </ItemBox>
              }
              {detail.secureExample === "" || detail.secureExample === "\n" ? (null) :
                <ItemBox>
                  <Item>Secure Example</Item>
                  <CodeBlock code={detail.secureExample} />
                </ItemBox>
              }
              {detail.solution && (detail.solution.sol !== "" || detail.solution.code !== "") ? (
                <ItemBox>
                  <Item>Solution</Item>
                  {detail.solution.sol === "" ? (null) :
                    <Description>{detail.solution.sol}</Description>
                  }
                  {detail.solution.code === "" ? (null) :
                    <CodeBlock code={detail.solution.code} />
                  }
                </ItemBox>
              ) :
                (null)
              }
            </Content>
          </>
        ) : (
          <h3 style={{ textAlign: "center", lineHeight: "55px" }}>If you click rule card, you can see its detail.</h3>
        )}
      </Box>
    </>
  );
}

export default RuleDetail;