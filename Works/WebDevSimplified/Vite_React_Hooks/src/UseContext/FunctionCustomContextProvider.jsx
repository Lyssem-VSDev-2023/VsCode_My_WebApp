import React from "react";
import { useTheme, useThemeUpdate } from "./CustomThemeContextProvider";

function FunctionCustomContextProvider() {
  const darkThemeBis = useTheme();
  const toggleThemeBis = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkThemeBis ? "#333" : "#CCC",
    color: darkThemeBis ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <br />
      <button onClick={toggleThemeBis}>Toggle Theme</button>
      <div style={themeStyles}>This is a Class Them</div>
    </>
  );
}

export default FunctionCustomContextProvider;
