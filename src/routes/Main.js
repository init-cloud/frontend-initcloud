import styled from "styled-components";

const Box = styled.div`
  padding: 1rem;
`

function Main() {

  return (
    <Box>
      <h1>This is Main Page</h1>
      <h4>This Webpage is Demo</h4>
      <span>You can use Terraform scan in <strong>Scan Page</strong>.</span><br/>
      <span>You can change Rule in <strong>Custom Page</strong>.</span><br/>
      <span>You can check profile in <strong>Profile Page</strong>.</span>
    </Box>
  )
}

export default Main;