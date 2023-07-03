import React, { useState } from "react";
import Back from "./Back";
import UseDeferredValue_SlowList from "./UseDeferredValue_SlowList";
import UseDeferredValue_FastList from "./UseDeferredValue_FastList";

function UseDeferredValuePage() {
  const [inputSlow, setInputSlow] = useState("");
  const [inputFast, setInputFast] = useState("");

  function handleChangeSlow(e) {
    setInputSlow(e.target.value);
  }

  function handleChangeFast(e) {
    setInputFast(e.target.value);
  }

  return (
    <>
      <Back></Back>
      <div>
        <b>Slow List</b>
      </div>

      <input type="text" value={inputSlow} onChange={handleChangeSlow} />
      <UseDeferredValue_SlowList
        inputSlow={inputSlow}
      ></UseDeferredValue_SlowList>

      <br />
      <div>
        <b>Fast List</b>
      </div>

      <input type="text" value={inputFast} onChange={handleChangeFast} />
      <UseDeferredValue_FastList
        inputFast={inputFast}
      ></UseDeferredValue_FastList>
    </>
  );
}

export default UseDeferredValuePage;
