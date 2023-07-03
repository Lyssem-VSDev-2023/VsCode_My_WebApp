import React, { useState, useCallback } from "react";
import Back from "./Back";
import UseCallbackList from "./UseCallbackList";

function UseCallbackPage() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback((incrementor) => {
    return [number + incrementor, number + 1 + incrementor, number + 2 + incrementor];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <>
      <Back></Back>
      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Toggle Theme
        </button>
        <UseCallbackList getItems={getItems}></UseCallbackList>
      </div>
    </>
  );
}

export default UseCallbackPage;
