import React from "react";
import styled from "styled-components";
import SubMenu from "./SubMenu";
import { SidebarData } from "./SidebarData";

const SidebarWrap = styled.div`
  width: 100%;
`;

function Sidebar() {
  return (
    <>
      <SidebarWrap>
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </SidebarWrap>
    </>
  );
}

export default Sidebar;
