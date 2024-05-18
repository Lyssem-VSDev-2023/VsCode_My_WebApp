//import * as AiIcons from "react-icons/ai";
//import * as RiIcons from "react-icons/ri";
//import * as TbIcons from "react-icons/tb";
//import * as BsIcons from "react-icons/bs";

// if icon not be found=> npm update react-icons

// https://react-icons.github.io/react-icons/

import {
  RiJavascriptLine,
  RiGlobalLine,
  RiErrorWarningLine,
  RiArrowDownSFill,
  RiArrowUpSFill,
} from "react-icons/ri";

import {
  TbBrandNodejs,
  TbBrandCSharp,
  TbBrandReact,
  TbBrandTypescript,
  TbBrandVscode,
  TbPackage,
  TbBrandBootstrap,
} from "react-icons/tb";

import { PiBooksDuotone, PiStudentBold, PiFileCss } from "react-icons/pi";

import { BsFiletypeSvg, BsMarkdown, BsFilePerson } from "react-icons/bs";

import { FaToolbox } from "react-icons/fa";

import { AiFillHome } from "react-icons/ai";

export const IconsList = {
  NavBar: {
    tutorialsIcon: <PiBooksDuotone className="mb-1 me-2" />,
    genericsIcon: <RiGlobalLine className="mb-1 me-2" />,
    toolsIcon: <FaToolbox className="mb-1 me-2" />,
    learnIcon: <PiStudentBold className="mb-1 me-2" />,
    aboutIcon: <BsFilePerson className="mb-1 me-2" />,
  },
  Tutorials: {
    nodeJSIcon: <TbBrandNodejs className="mb-1 me-2" />,
    javaScriptIcon: <RiJavascriptLine className="mb-1 me-2" />,
    typeScriptIcon: <TbBrandTypescript className="mb-1 me-2" />,
    cSharpIcon: <TbBrandCSharp className="mb-1 me-2" />,
    markDownIcon: <BsMarkdown className="mb-1 me-2" />,
    reactIcon: <TbBrandReact className="mb-1 me-2" />,
    cssIcon: <PiFileCss className="mb-1 me-2" />,
  },
  Generics: {
    vsCodeIcon: <TbBrandVscode className="mb-1 me-2" />,
    errorsIcon: <RiErrorWarningLine className="mb-1 me-2" />,
    packagesIcon: <TbPackage className="mb-1 me-2" />,
  },
  Tools: {
    bootStrapIcon: <TbBrandBootstrap className="mb-1 me-2" />,
  },
  Learn: {
    svgIcon: <BsFiletypeSvg className="mb-1 me-2" />,
  },
  SideBar: {
    reactIcon: <TbBrandReact className="mb-1 me-2" />,
    downIcon: <RiArrowDownSFill />,
    upIcon: <RiArrowUpSFill />,
    homeIcon: <AiFillHome />,
  },
};
