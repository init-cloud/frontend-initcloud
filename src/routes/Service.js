import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Scan from "./Scan";
import Custom from "./Custom";
import SideBar from "./SideBar";
import Main from "./Main";
import Report from "./Report";

const Center = styled.div`
  display: flex;
  width : 100vw;
  height : 100vh;
  flex-wrap: nowrap;
`

function Service() {
  return (
    <>
        <Center>
          <SideBar />
          <Routes>
            <Route path="" element={<Main />} />
            <Route path="scan" element={<Scan />} />
            <Route path="custom" element={<Custom />} />
            <Route path="report" element={<Report />} />
          </Routes>
        </Center>
    </>
  );
}

export default Service;