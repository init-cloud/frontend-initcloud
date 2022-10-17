import styled from "styled-components";

const Service = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  padding: 1rem;
  flex-wrap: wrap;
  overflow-y: auto;
  flex-direction: column;
`
const ProfileImg = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

function Profile() {

  return (
    <Service>
      <h1>This is Profile Page</h1>
      <ProfileImg>
        <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Profile"/>      
      </ProfileImg>
      <h3>ID : GGam._.2</h3>
      <h3>E-mail : ggam2@init.cloud</h3>
      <h3>Coporation : initCloud</h3>
      <h3>Department : DevOps</h3>
    </Service>
  )
}

export default Profile;