import { IconsList } from "../IconsList/IconsList";

export const SidebarData = [
  {
    title: "React",
    path: "#",
    icon: IconsList.SideBar.reactIcon,
    iconClosed: IconsList.SideBar.downIcon,
    iconOpened: IconsList.SideBar.upIcon,
    subNav: [
      {
        title: "React Dev Examples",
        path: "/reactdev",
        icon: IconsList.SideBar.homeIcon,
        divider: false,
      },
      {
        title: "React Router DOM",
        path: "/?self=reactrouterapp",
        icon: IconsList.SideBar.homeIcon,
        divider: false,
      },
      {
        title: "React Router - Examples",
        path: "/reactrouterexamples",
        icon: IconsList.SideBar.homeIcon,
        divider: false,
      },
    ],
  },
  {
    title: "Web Dev Simplified",
    path: "#",
    icon: IconsList.SideBar.homeIcon,
    iconClosed: IconsList.SideBar.downIcon,
    iconOpened: IconsList.SideBar.upIcon,
    subNav: [
      {
        title: "Budget App",
        path: "/budgetapp",
        icon: IconsList.SideBar.homeIcon,
        divider: false,
      },
      {
        title: "React Hooks",
        path: "/reacthooks",
        icon: IconsList.SideBar.homeIcon,
        divider: false,
      },
      {
        title: "ReactQuery (TanStack)",
        path: "/tanstack",
        icon: IconsList.SideBar.homeIcon,
        divider: false,
      },
    ],
  },
];
