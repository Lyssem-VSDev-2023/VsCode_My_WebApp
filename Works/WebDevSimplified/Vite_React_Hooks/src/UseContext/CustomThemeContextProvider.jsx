import React, { useContext, useState } from "react";

const ThemeContextBis = React.createContext();

export function useTheme() {
  return useContext(ThemeContextBis);
}

const ThemeContextBisUpdate = React.createContext();

export function useThemeUpdate() {
  return useContext(ThemeContextBisUpdate);
}

function CustomThemeContextProvider({ children }) {
  const [darkThemeBis, setDarkThemeBis] = useState(true);

  function toggleThemeBis() {
    setDarkThemeBis((pervDarkThemBis) => !pervDarkThemBis);
  }

  return (
    <ThemeContextBis.Provider value={darkThemeBis}>
      <ThemeContextBisUpdate.Provider value={toggleThemeBis}>
        {children}
      </ThemeContextBisUpdate.Provider>
    </ThemeContextBis.Provider>
  );
}

export default CustomThemeContextProvider;
