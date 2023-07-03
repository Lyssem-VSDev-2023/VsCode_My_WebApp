import React, { useState } from "react";
import Back from "./Back";
import useLocalStorage from "./UseCustomHooks/useLocalStorage";

function UseDebugValuePage() {
  //check the useLocalStorage customHook for more details.
  const [firstName, setFirstName] = useLocalStorage("firstName", "Lyes");
  const [lastName, setLastName] = useState("Bensebti");
  return (
    <>
      <Back></Back>
      First:{" "}
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      Last:{" "}
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
    </>
  );
}

export default UseDebugValuePage;
