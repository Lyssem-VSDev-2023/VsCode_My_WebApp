import React, { useState, useEffect, useRef } from "react";
import Back from "./Back";

function UseRefPage() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const [name2, setName2] = useState("");
  const inputRef = useRef();

  function focus() {
    inputRef.current.focus();
  }

  return (
    <>
      <Back></Back>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <div>My Name is {name}</div>
        <div>My Component rendered {renderCount.current}</div>
      </div>
      <br />
      <hr />
      <div>
        <input
          ref={inputRef}
          value={name2}
          onChange={(e) => setName2(e.target.value)}
        ></input>
        <div>My Name is {name2}</div>
        <button onClick={focus}>Focus</button>
      </div>
    </>
  );
}

export default UseRefPage;
