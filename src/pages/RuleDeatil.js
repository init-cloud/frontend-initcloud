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
  height: 56vh;
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
  font-size: 11px;
  font-weight: bold;
  height: 15px;
  line-height: 15px;
  padding: 0px 10px;
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

function RuleDetail({ detail }) {
  const colorTable = (item) => {
    const SECURITY_TYPE = ["INCIDENT RESPONSE", "ACCESS CONTROL", "MEDIA PROTECTION", "IDENTIFICATION AND AUTHENTICATION", "AUDIT AND ACCOUNTABILITY", "CONFIGURATION MANAGEMENT", "SYSTEM AND INFORMATION INTEGRITY", "SYSTEM AND COMMUNICATIONS PROTECTION", "CONTINGENCY PLANNING", "PERFORMANCE IMPROVEMENTS"];
    const RESOURCE = ["ncloud_lb_target_group", "ncloud_access_control_group_rule", "ncloud_server", "ncloud_launch_configuration", "ncloud_network_acl_rule"];
    const VENDOR = { "AWS": "#D37833", "NCP": "#E1FFB1" };
    if (SECURITY_TYPE.includes(item)) return ('#FFECFF');
    else if (RESOURCE.includes(item)) return ('#D5FDFF');
    else return (VENDOR[item]);
  }
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
                    color={colorTable(item)}>
                    {item}
                  </Filter>
                ))}
              </Filters>
            </Top>
            <Content>
              <Item>Description</Item>
              <Description>{detail.description}</Description>
              <Item>Explanation</Item>
              <Description>{detail.explanation}</Description>
              <Item>Possible Impact</Item>
              <Description>{detail.possibleImpact}</Description>
              <Item>Insecure Example</Item>
              <CodeBlock code={detail.insecureExample} />
              <Item>Secure Example</Item>
              <CodeBlock code={detail.secureExample} />
              <Item>Solution</Item>
              <Description>{detail.solution.sol}</Description>
              <CodeBlock code={detail.solution.code} />
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