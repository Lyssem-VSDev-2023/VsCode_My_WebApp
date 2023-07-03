import React, { useState } from "react";

import FunctionContextComponent from "./UseContext/FunctionContextComponent";
import ClassContextComponent from "./UseContext/ClassContextComponent";

import CustomThemeContextProvider from "./UseContext/CustomThemeContextProvider";
import FunctionCustomContextProvider from "./UseContext/FunctionCustomContextProvider";

import Back from "./Back";
// import { CustomThemeContextProvider } from "./UseContext/CustomThemeContextProvider";

export const ThemeContext = React.createContext();

function UseContextPage() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((pervDarkThem) => !pervDarkThem);
  }

  return (
    <>
      <Back></Back>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* ----------------Class Component--------------------------- */}
      <br />
      <br />
      <div>
        <b>Class Component</b>
      </div>
      <ThemeContext.Provider value={darkTheme}>
        <ClassContextComponent></ClassContextComponent>
      </ThemeContext.Provider>
      <br />
      <br />
      <hr />
      {/* ----------------Function Component--------------------------- */}
      <div>
        <b>Function Component</b>
      </div>
      <ThemeContext.Provider value={darkTheme}>
        <FunctionContextComponent></FunctionContextComponent>
      </ThemeContext.Provider>
      {/* ----------------Custom Hook Context provider--------------------------- */}
      <hr />
      <div>
        <b>Custom Hook Context provider</b>
      </div>
      <CustomThemeContextProvider>
        <FunctionCustomContextProvider />
      </CustomThemeContextProvider>
    </>
  );
}

export default UseContextPage;
