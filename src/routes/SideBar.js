import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Side = styled.div`
  flex-basis: 150px;
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #262b40;
`
const Menu = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  text-align: center;
`
const Circle = styled.div`
  background-color: white;
  border-radius: 25px;
  margin: 10px;
  height: 80px;
  overflow: hidden;
`

const Img = styled.img`
  width: 85%;
`

function SideBar() {
  const menus = [
    { name: "Scan", path: "/scan" },
    { name: "Custom", path: "/custom" },
    { name: "Profile", path: "/profile" },
  ];

  const basicStyle = {
    color: "whitesmoke",
    textDecoration: "none",
    cursor: "pointer"
  }

  const activeStyle = {
    color: "white",
    fontWeight: "bold",
    textDecoration: "none"
  }

  return (
    <Side>
      <Menu>
        <NavLink to="/initCloud" key="main">
          <Circle>
            <Img src={`${process.env.PUBLIC_URL}/initcloud.png`} alt="init.cloud logo" />
          </Circle>
        </NavLink>
        {menus.map((menu, index) => {
          return (
            <NavLink
              to={menu.path}
              style={({ isActive }) =>
                isActive ? activeStyle : basicStyle
              }
              key={index}
            >
              <h4>{menu.name}</h4>
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
}

export default SideBar;