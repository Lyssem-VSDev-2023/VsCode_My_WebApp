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
  background: #212529;
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

const DropdownLinkA = styled.a`
  background: #212529;
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

const MenuDivider = styled.div`
  width: 90%;
  height: 1px;
  margin-left: 10px;
  background-color: #616060;
`;

const SubMenuDivider = styled(MenuDivider)`
  width: 70%;
  margin-left: 30px;
`;

function SubMenu({ item }) {
  const [isSubNav, setIsSubNav] = useState(true);

  const showSubNav = () => {
    setIsSubNav(!isSubNav);
  };

  const itemLink = !item.divider ? (
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
  ) : (
    <MenuDivider></MenuDivider>
  );

  const subItemLink =
    !item.divider &&
    isSubNav &&
    item.subNav.map((subItem, SubIndex) => {
      return !subItem.divider ? (
        subItem.path.includes("?") ? (
          <DropdownLinkA href={subItem.path} key={SubIndex}>
            {subItem.icon}
            <SidebarLabel>{subItem.title}</SidebarLabel>
          </DropdownLinkA>
        ) : (
          <DropdownLink to={subItem.path} key={SubIndex}>
            {subItem.icon}
            <SidebarLabel>{subItem.title}</SidebarLabel>
          </DropdownLink>
        )
      ) : (
        <SubMenuDivider></SubMenuDivider>
      );
    });

  return (
    <>
      {itemLink}
      {subItemLink}
    </>
  );
}

export default SubMenu;
