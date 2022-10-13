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

function Profile() {

  return (
    <Service>
      <h1>This is Profile Page</h1>
    </Service>
  )
}

export default Profile;