import useDarkMode from "./useDarkMode";
import "./body.css";
import Back from "../../Back";

export default function DarkModeComponent() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <>
      <Back></Back>
      <button
        onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}
        style={{
          border: `1px solid ${darkMode ? "white" : "black"}`,
          background: "none",
          color: darkMode ? "white" : "black",
        }}
      >
        Toggle Dark Mode
      </button>
    </>
  );
}
