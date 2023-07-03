import React, { useState, useMemo,useEffect } from "react";
import Back from "./Back";

function UseMemoPage() {
  {
    /* ************************Original with Slow function***************************** */
  }

  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = "Uncomment Slow function"; //SlowDoubleNumber(number);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  {
    /* ************************useMemo***************************** */
  }

  const [number2, setNumber2] = useState(0);
  const [dark2, setDark2] = useState(false);

  const doubleNumber2 = useMemo(() => {
    return SlowDoubleNumber(number2);
  }, [number2]);

  const themeStyle2 = {
    backgroundColor: dark2 ? "black" : "white",
    color: dark2 ? "white" : "black",
  };

  {
    /* ************************useMemo for referential equality (in case of useEffect)***************************** */
  }

  const [number3, setNumber3] = useState(0);
  const [dark3, setDark3] = useState(false);

  const doubleNumber3 = useMemo(() => {
    return SlowDoubleNumber(number3);
  }, [number3]);

  const themeStyle3 = useMemo(() => {
    return {
      backgroundColor: dark3 ? "black" : "white",
      color: dark3 ? "white" : "black",
    };
  }, [dark3]);

  useEffect(() => {
    console.log("theme changed");
  }, [themeStyle3]);

  return (
    <>
      <Back></Back>
      {/* ************************Original with Slow function***************************** */}
      <div>
        <b>Original with Slow function</b>
      </div>
      <br />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      ></input>
      <br />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <br />
      <div style={themeStyle}>{doubleNumber}</div>
      <br />
      <hr />
      {/* ************************useMemo***************************** */}
      <div>
        <b>useMemo</b>
      </div>
      <br />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(parseInt(e.target.value))}
      ></input>
      <br />
      <br />
      <button onClick={() => setDark2((prevDark2) => !prevDark2)}>
        Change Theme useMemo
      </button>
      <br />
      <br />
      <div style={themeStyle2}>{doubleNumber2}</div>
      <br />
      <hr />
      {/* ************************useMemo for referential equality (in case of useEffect)***************************** */}
      <div>
        <b>useMemo for referential equality (in case of useEffect)</b>
      </div>
      <br />
      <input
        type="number"
        value={number3}
        onChange={(e) => setNumber3(parseInt(e.target.value))}
      ></input>
      <br />
      <br />
      <button onClick={() => setDark3((prevDark3) => !prevDark3)}>
        Change Theme useMemo
      </button>
      <br />
      <br />
      <div style={themeStyle3}>{doubleNumber3}</div>
    </>
  );
}

function SlowDoubleNumber(num) {
  console.log("Calling Slow running function");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default UseMemoPage;
