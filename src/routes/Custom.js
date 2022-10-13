import styled from "styled-components";

const Service = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  padding: 1rem;
  gap: 1rem;
  flex-wrap: wrap;
  overflow-y: auto;
`

function Custom() {

  return (
    <Service>
      <h1>This is Custom Page</h1>
    </Service>
  )
}

export default Custom;