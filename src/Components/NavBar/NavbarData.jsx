import { IconsList } from "../IconsList/IconsList";

export const NavbarData = [
  {
    title: "Tutorials ",
    path: "",
    icon: IconsList.NavBar.tutorialsIcon,
    subNav: [
      {
        title: "NodeJS",
        path: "/tutorials/nodejs",
        icon: IconsList.Tutorials.nodeJSIcon,
        divider: false,
      },
      {
        title: "Javascript",
        path: "/tutorials/javascript",
        icon: IconsList.Tutorials.javaScriptIcon,
        divider: false,
      },
      // {
      //   divider: true,
      // },
      {
        title: "TypeScript",
        path: "/tutorials/typescript",
        icon: IconsList.Tutorials.typeScriptIcon,
        divider: false,
      },
      {
        title: "React",
        path: "/tutorials/react",
        icon: IconsList.Tutorials.reactIcon,
        divider: false,
      },

      {
        title: "Markdown",
        path: "/tutorials/markdown",
        icon: IconsList.Tutorials.markDownIcon,
        divider: false,
      },
      {
        title: "CSS",
        path: "/tutorials/css",
        icon: IconsList.Tutorials.cssIcon,
        divider: false,
      },
      {
        divider: true,
      },
      {
        title: "C-Sharp",
        path: "/overview/csharp",
        icon: IconsList.Tutorials.cSharpIcon,
        divider: false,
      },
    ],
  },
  {
    title: "Generics ",
    path: "",
    icon: IconsList.NavBar.genericsIcon,
    subNav: [
      {
        title: "Visual Studio Code",
        path: "/generics/vscode",
        icon: IconsList.Generics.vsCodeIcon,
        divider: false,
      },
      {
        title: "Packages & Utilities",
        path: "/generics/utils",
        icon: IconsList.Generics.packagesIcon,
        divider: false,
      },
      {
        title: "Faced Errors",
        path: "/generics/errors",
        icon: IconsList.Generics.errorsIcon,
        divider: false,
      },
    ],
  },
  {
    title: "ToolKits ",
    path: "",
    icon: IconsList.NavBar.toolsIcon,
    subNav: [
      {
        title: "Bootstrap Templates",
        path: "/toolkits/bstemplates",
        icon: IconsList.Tools.bootStrapIcon,
        divider: false,
      },
      {
        title: "Bootstrap Menu Examples",
        path: "/toolkits/bsmenuexamples",
        icon: IconsList.Tools.bootStrapIcon,
        divider: false,
      },
    ],
  },
  {
    title: "Learn/ToDo",
    path: "/learn",
    icon: IconsList.NavBar.learnIcon,
    subNav: [
      {
        title: "SVG",
        path: "/tolearn/svg",
        icon: IconsList.Learn.svgIcon,
        divider: false,
      },
    ],
  },
  {
    title: "About",
    path: "/about",
    icon: IconsList.NavBar.aboutIcon,
  },
];
