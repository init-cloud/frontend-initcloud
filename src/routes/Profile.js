import styled, { keyframes } from "styled-components";

const Service = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  padding: 1rem;
  overflow-y: auto;
  flex-direction: column;
  background-color: #f5f8fb;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #C3C5C7;
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
const Layout = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 1rem;
`
const boxFade = keyframes`
  0% {
      opacity: 0;
      transform: translate3d(0, 3%, 0);
  }
  to {
      opacity: 1;
      transform: translateZ(0);
  }
`

const Box = styled.div`
  min-height: 500px;
  min-width: 610px;
  flex-basis: 610px;
  flex-shrink: 1;
  flex-grow: 1;
  flex-direction: column;
  animation: ${boxFade} ${(props) => props.time};
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
      <Layout>
        <Box time={"0.3s"}>
          <h1>This is Profile Page</h1>
          <ProfileImg>
            <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Profile" />
          </ProfileImg>
          <h3>ID : GGam._.2</h3>
          <h3>E-mail : ggam2@init.cloud</h3>
          <h3>Coporation : initCloud</h3>
          <h3>Department : DevOps</h3>

        </Box>
      </Layout>
    </Service>
  )
}

export default Profile;