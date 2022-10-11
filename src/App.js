import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Scan from "./routes/Scan"
import Custom from "./routes/Custom";
import Profile from "./routes/Profile"
import SideBar from "./routes/SideBar";
import Main from "./routes/Main";

const Center = styled.div`
  display: flex;
  wide : 100vw;
  height : 100vh;
  flex-wrap: nowrap;
`

function App() {
  return (
    <Router>
      <Center>
        <SideBar />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/scan" element={<Scan />}/>
          <Route path="/custom" element={<Custom />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </Center>
  </Router>
  );
}

export default App;