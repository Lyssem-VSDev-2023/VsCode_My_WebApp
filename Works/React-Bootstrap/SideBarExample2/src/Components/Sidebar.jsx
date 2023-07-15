import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import OutsideClick from "../Hooks/OutsideClick";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  text-decoration: none;
  font-weight: bold;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0px;
  /* left: ${({ sidebar }) => (sidebar ? "0" : "-100%")}; */
  left: ${({ sidebar }) => (sidebar ? "0" : "0")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  //TODO: click outside condition
  const boxRef = useRef(null);

  const showSidebar = () => setSidebar(true);
  const hideSidebar = () => {
    setSidebar(true);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            {/* <FaIcons.FaBars onClick={showSidebar} /> */}
            My Web App
          </NavIcon>
        </Nav>
        <SidebarNav
          ref={boxRef}
          sidebar={sidebar ? 1 : undefined}
          //   sidebar={sidebar ? (!isout ? 1 : undefined) : undefined}
        >
          <SidebarWrap>
            <NavIcon to="#">
              {/* <AiIcons.AiOutlineClose onClick={hideSidebar} /> */}
              My Web App
            </NavIcon>
            {SidebarData.map((item, index) => {
              return (
                <SubMenu item={item} key={index} hideSidebar={hideSidebar} />
              );
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
