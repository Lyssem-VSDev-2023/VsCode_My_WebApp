import React, { useState } from "react";
import Back from "./Back";
import useLocalStorage from "./UseCustomHooks/useLocalStorage";
import useUpdateLogger from "./UseCustomHooks/useUpdateLogger";

function UseCustomHooksPage() {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);
  return (
    <>
      <Back></Back>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

export default UseCustomHooksPage;
