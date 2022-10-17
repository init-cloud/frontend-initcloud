import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled,{ createGlobalStyle } from "styled-components";
import Scan from "./routes/Scan"
import Custom from "./routes/Custom";
import Profile from "./routes/Profile"
import SideBar from "./routes/SideBar";
import Main from "./routes/Main";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
  body {
    font-family: 'Open Sans', sans-serif;
  }
  h1 {
    text-shadow: 1px 4px 2px rgba(0,0,0,0.2), 0px -3px 20px rgba(255,255,255,0.4);
  }
`

const Center = styled.div`
  display: flex;
  width : 100vw;
  height : 100vh;
  flex-wrap: nowrap;
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Center>
        <SideBar />
        <Routes>
          <Route path="/initCloud" element={<Main />}/>
          <Route path="/scan" element={<Scan />}/>
          <Route path="/custom" element={<Custom />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </Center>
    </Router>
    </>
    );
}

export default App;