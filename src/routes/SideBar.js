import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Side = styled.div`
  flex-basis: 150px;
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  border-right: 3px solid gray;
  flex-direction: column;
  align-items: center;
`
const Menu = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  text-align: center;
`
const Img = styled.img`
  width: 70%;
  padding-top: 10px
`

function SideBar() {
  const menus = [
    { name: "Scan", path: "/scan" },
    { name: "Custom", path: "/custom" },
    { name: "Profile", path: "/profile" },
  ];

  const basicStyle = {
    color: "gray",
    textDecoration: "none",
    cursor: "pointer"
  }

  const activeStyle = {
    color: "black",
    fontWeight: "bold",
    textDecoration: "none"
  }

  return (
    <Side>
      <Menu>
        <NavLink to="/initCloud" key="main">
          <Img src={`${process.env.PUBLIC_URL}/initcloud.png`} alt="init.cloud logo" />      
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