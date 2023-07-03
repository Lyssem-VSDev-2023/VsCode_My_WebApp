import React, { useRef, useState } from "react";
import Back from "./Back";
import UseImperativeHandleCustomInput from "./UseImperativeHandle/UseImperativeHandleCustomInput";
import UseImperativeHandleCustomInputFocus from "./UseImperativeHandle/UseImperativeHandleCustomInputFocus";

function UseImperativeHandlePage() {
  //
  // *******************Basic useImperativeHandle Usage******************************
  //
  const [value, setValue] = useState("red");
  const inputRef = useRef();

  // *******************Focus child useImperativeHandle + Different Implementation ******************************

  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  function handleClickAlert() {
    ref.current.alertValue();
  }

  // *******************Complete Example ******************************

  return (
    <>
      <Back></Back>

      {/********************Basic useImperativeHandle Usage*******************************/}

      <UseImperativeHandleCustomInput
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => inputRef.current.alertValue()}>Alert</button>
      <br />
      <br />
      <br />

      {/********************Focus child useImperativeHandle + Different Implementation ****************************** */}

      <UseImperativeHandleCustomInputFocus label="Enter your name:" ref={ref} />
      <br />
      <br />
      <button type="button" onClick={handleClick}>
        Focus
      </button>
      <br />
      <br />
      <button type="button" onClick={handleClickAlert}>
        Alert Value
      </button>
      <br />
      <br />
      <br />
      {/********************Complete Example ****************************** */}
    </>
  );
}

export default UseImperativeHandlePage;
