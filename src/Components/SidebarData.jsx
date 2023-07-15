import React from "react";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";

//Icons
const downIcon = <RiIcons.RiArrowDownSFill />;
const upIcon = <RiIcons.RiArrowUpSFill />;

export const SidebarData = [
  {
    title: "Web Dev Simplified",
    path: "/overview",
    techs: "",
    icon: <AiIcons.AiFillHome />,
    iconClosed: downIcon,
    iconOpened: upIcon,
    subNav: [
      {
        title: "Users",
        path: "/overview/users",
        techs: "",
        icon: <AiIcons.AiFillHome />,
      },
    ],
  },
  {
    title: "Reports",
    path: "/reports",
    techs: "",
    icon: <AiIcons.AiFillHome />,
    iconClosed: downIcon,
    iconOpened: upIcon,
    subNav: [
      {
        title: "Report1",
        path: "/reports/report1",
        techs: "",
        icon: <AiIcons.AiFillHome />,
      },
    ],
  },
  {
    title: "Products",
    path: "/products",
    techs: "",
    icon: <AiIcons.AiFillHome />,
  },
];
