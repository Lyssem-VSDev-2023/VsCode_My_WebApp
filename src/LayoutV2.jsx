import { Outlet } from "react-router-dom";
import NavBarMenu from "./Components/NavBar/NavBarMenu";

import Sidebar from "./Components/SideBar/Sidebar";

import "./Styles/style.css";

const LayoutV2 = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <header className="">
          <NavBarMenu></NavBarMenu>
        </header>
        <main>
          <aside>
            <Sidebar></Sidebar>
          </aside>
          <article className="p-3">
            <Outlet></Outlet>
          </article>
          <aside></aside>
        </main>
        <footer>2023 - Learning Web App of Lyes </footer>
      </div>
    </>
  );
};

export default LayoutV2;
