import React, { useState, useTransition } from "react";
import Back from "./Back";

function UseTransitionPage() {
  const LIST_SIZE = 20000;

  // **********************Initial long operation*******************

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function handleChange(e) {
    setInput(e.target.value);

    let l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(e.target.value);
    }
    setList(l);
  }

  // **********************useTransition operation*******************

  const [isPending, startTransition] = useTransition();

  const [input2, setInput2] = useState("");
  const [list2, setList2] = useState([]);

  function handleChange2(e) {
    setInput2(e.target.value);
    startTransition(() => {
      let l2 = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l2.push(e.target.value);
      }
      setList2(l2);
    });
  }

  return (
    <>
      <Back></Back>
      {/* // **********************Initial long operation******************* */}

      <b>long operation</b>
      <br />
      <br />
      <input type="text" value={input} onChange={handleChange} />
      {list.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}

      <br />
      <br />

      {/* // **********************useTransition operation******************* */}

      <b>useTransition operation</b>
      <br />
      <br />
      <input type="text" value={input2} onChange={handleChange2} />
      {isPending? "Loading..." : list2.map((item2, index2) => {
        return <div key={index2}>{item2}</div>;
      })}
    </>
  );
}

export default UseTransitionPage;
