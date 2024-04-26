import React from "react";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as PiIcons from "react-icons/pi";
import * as TbIcons from "react-icons/tb";
import * as BsIcons from "react-icons/bs";

//Icons
const downIcon = <RiIcons.RiArrowDownSFill />;
const upIcon = <RiIcons.RiArrowUpSFill />;

//NavBar SubIcons
const jsIcon = <RiIcons.RiJavascriptLine className="mb-1 me-2" />;
const tsIcon = <TbIcons.TbBrandTypescript className="mb-1 me-2" />;
const csIcon = <TbIcons.TbBrandCSharp className="mb-1 me-2" />;
const vscodeIcon = <TbIcons.TbBrandVscode className="mb-1 me-2" />;
const bsIcon = <TbIcons.TbBrandBootstrap className="mb-1 me-2" />;
const mdIcon = <BsIcons.BsMarkdown className="mb-1 me-2" />;
const svgIcon = <BsIcons.BsFiletypeSvg className="mb-1 me-2" />;

export const NavbarData = [
  {
    title: "Tutorials ",
    path: "/tutorials",
    icon: <PiIcons.PiBooksDuotone />,
    iconClosed: downIcon,
    iconOpened: upIcon,
    subNav: [
      {
        title: "Javascript",
        path: "/tutorials/javascript",
        icon: jsIcon,
        divider: false,
      },
      // {
      //   divider: true,
      // },
      {
        title: "TypeScript",
        path: "/overview/typescript",
        icon: tsIcon,
        divider: false,
      },
      {
        title: "Markdown",
        path: "/overview/markdown",
        icon: mdIcon,
        divider: false,
      },
      {
        title: "C-Sharp",
        path: "/overview/csharp",
        icon: csIcon,
        divider: false,
      },
    ],
  },
  {
    title: "Generics ",
    path: "/generics",
    icon: <PiIcons.PiBooksDuotone />,
    iconClosed: downIcon,
    iconOpened: upIcon,
    subNav: [
      {
        title: "Visual Studio Code",
        path: "/generics/vscode",
        icon: vscodeIcon,
        divider: false,
      },
    ],
  },
  {
    title: "Toolkits ",
    path: "/toolkits",
    icon: <PiIcons.PiBooksDuotone />,
    iconClosed: downIcon,
    iconOpened: upIcon,
    subNav: [
      {
        title: "Bootstrap Templates",
        path: "/toolkits/bstemplates",
        icon: bsIcon,
        divider: false,
      },
      {
        title: "Bootstrap Menu Examples",
        path: "/toolkits/bsmenuexamples",
        icon: bsIcon,
        divider: false,
      },
    ],
  },
  {
    title: "To Learn ",
    path: "/tolearn",
    icon: <PiIcons.PiBooksDuotone />,
    iconClosed: downIcon,
    iconOpened: upIcon,
    subNav: [
      {
        title: "SVG",
        path: "/tolearn/svg",
        icon: svgIcon,
        divider: false,
      },
    ],
  },
  {
    title: "About",
    path: "/about",
    icon: <AiIcons.AiOutlineBook />,
  },
  {
    title: "Test",
    path: "/test",
    icon: <AiIcons.AiOutlineBook />,
  },
];
