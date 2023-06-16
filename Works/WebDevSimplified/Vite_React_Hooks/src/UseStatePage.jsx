import { useState } from "react";
import Back from "./Back";

function UseStatePage() {
  /******************************Incorrect useState Assignment ********************************/

  const [count1, setCount1] = useState(4);

  function decrementCountIncorrect() {
    //Still the same reference of default value, so it will always decrement by 1
    setCount1(count1 - 1);
    setCount1(count1 - 1);
  }

  function incrementCountIncorrect() {
    //Still the same reference of default value, so it will always decrement by 1
    setCount1(count1 + 1);
    setCount1(count1 + 1);
  }

  /******************************Incorrect useState Correct ********************************/

  const [count2, setCount2] = useState(4);

  function decrementCountCorrect() {
    //preCount is assigned the new Value
    setCount2((prevCount1) => prevCount1 - 1);
    setCount2((prevCount1) => prevCount1 - 1);
  }

  function incrementCountCorrect() {
    //preCount is assigned the new Value
    setCount2((prevCount2) => prevCount2 + 1);
    setCount2((prevCount2) => prevCount2 + 1);
  }

  /******************************Function Assignment ********************************/

  const [count3, setCount3] = useState(() => {
    console.log("run function");
    return 4;
  });

  function decrementCountFunction() {
    //preCount is assigned the new Value
    setCount3((prevCount3) => prevCount3 - 1);
    setCount3((prevCount3) => prevCount3 - 1);
  }

  function incrementCountFunction() {
    //preCount is assigned the new Value
    setCount3((prevCount) => prevCount + 1);
    setCount3((prevCount) => prevCount + 1);
  }

  /******************************Object States - Override State********************************/

  const [state1, setState1] = useState({ count: 4, theme: "blue" });
  const countState1 = state1.count;
  const themeState1 = state1.theme;

  function decrementCountObjectOverride() {
    setState1(prevState1 => {
      return { count : prevState1.count - 1}
    })
  }

  function incrementCountObjectOverride() {
    setState1(prevState1 => {
      return { count : prevState1.count + 1}
    })
  }

  /******************************Object States - Spread State********************************/

  const [state2, setState2] = useState({ count: 4, theme: "blue" });
  const countState2 = state2.count;
  const themeState2 = state2.theme;

  function decrementCountObjectSpread() {
    setState2(prevState2 => {
      return { ...prevState2, count : prevState2.count - 1}
    })
  }

  function incrementCountObjectSpread() {
    setState2(prevState2 => {
      return { ...prevState2, count : prevState2.count + 1}
    })
  }

  /******************************Render ********************************/
  return (
    <>
      <Back></Back>
      Incorrect
      <br />
      <button onClick={decrementCountIncorrect}>-</button>
      <span>{count1}</span>
      <button onClick={incrementCountIncorrect}>+</button>
      <br />
      <br />
      <br />
      <hr></hr>
      Correct
      <br />
      <button onClick={decrementCountCorrect}>-</button>
      <span>{count2}</span>
      <button onClick={incrementCountCorrect}>+</button>
      <br />
      <br />
      <br />
      <hr></hr>
      function assignment to useState run only once rendered, not every time the
      function is called
      <br />
      <b> best performance</b>
      <br />
      <button onClick={decrementCountFunction}>-</button>
      <span>{count3}</span>
      <button onClick={incrementCountFunction}>+</button>
      <br />
      <br />
      <br />
      <hr></hr>
      <b>Object State: </b>Override State, the Theme value will be erased after state update
      <br /><br />
      <div>
        <b>State Object Theme is :</b>
        {themeState1}
      </div>
      <div>
        <b>State Object Count is :</b>
        {countState1}
      </div>
      <button onClick={decrementCountObjectOverride}>-</button>
      <span>{" "}</span>
      <button onClick={incrementCountObjectOverride}>+</button>
      <br />
      <br />
      <br />
      <hr></hr>
      <b>Object State: </b>Maintain State, spread the state and modify only the targeted property, Theme will be preserved here
      <br /><br />
      <div>
        <b>State Object Theme is :</b>
        {themeState2}
      </div>
      <div>
        <b>State Object Count is :</b>
        {countState2}
      </div>
      <button onClick={decrementCountObjectSpread}>-</button>
      <span>{" "}</span>
      <button onClick={incrementCountObjectSpread}>+</button>
      <br />
      <br />
      <br />
    </>
  );
}

export default UseStatePage;
