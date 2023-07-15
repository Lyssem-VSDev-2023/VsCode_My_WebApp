import React from "react";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

const SidebarNav = styled.nav`
  background: #212529;
  width: 270px;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 68px;
  left: 0px;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

function Sidebar() {
  return (
    <>
      <SidebarNav>
        <SidebarWrap className="mt-4">
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
}

export default Sidebar;
