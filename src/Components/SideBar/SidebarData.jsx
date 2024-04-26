import React from "react";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";

//Icons
const downIcon = <RiIcons.RiArrowDownSFill />;
const upIcon = <RiIcons.RiArrowUpSFill />;

export const SidebarData = [
  {
    title: "React",
    path: "#",
    techs: "",
    icon: <AiIcons.AiFillHome />,
    iconClosed: downIcon,
    iconOpened: upIcon,
    subNav: [
      {
        title: "React Dev",
        path: "/reactdev",
        techs: ["js", "jsx"],
        icon: <AiIcons.AiFillHome />,
        divider: false,
      },
      {
        title: "React Router - Tutorial",
        path: "/?self=reactrouterapp",
        techs: ["js", "jsx"],
        icon: <AiIcons.AiFillHome />,
        divider: false,
      },
      {
        title: "React Router - Examples",
        path: "/reactrouterexamples",
        techs: ["js", "jsx"],
        icon: <AiIcons.AiFillHome />,
        divider: false,
      },
    ],
  },
  {
    title: "Web Dev Simplified",
    path: "#",
    techs: "",
    icon: <AiIcons.AiFillHome />,
    iconClosed: downIcon,
    iconOpened: upIcon,
    subNav: [
      {
        title: "Budget App",
        path: "/budgetapp",
        techs: ["js", "jsx"],
        icon: <AiIcons.AiFillHome />,
        divider: false,
      },
      {
        title: "React Hooks",
        path: "/reacthooks",
        techs: ["js", "jsx"],
        icon: <AiIcons.AiFillHome />,
        divider: false,
      },
      {
        title: "ReactQuery (TanStack)",
        path: "/tanstack",
        techs: ["js", "jsx"],
        icon: <AiIcons.AiFillHome />,
        divider: false,
      },
    ],
  },
];
