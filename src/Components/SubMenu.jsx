import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  list-style: none;
  height: 45px;
  text-decoration: none;
  font-size: 15px;
  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 10px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 45px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 15px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

function SubMenu({ item }) {
  const [isSubNav, setIsSubNav] = useState(false);

  const showSubNav = () => {
    setIsSubNav(!isSubNav);
  };

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubNav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && isSubNav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>

      {isSubNav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
}

export default SubMenu;
