import React, { useEffect, useState } from "react";
import Back from "./Back";
import UseLayoutEffect_UseEff from "./UseLayoutEffect_UseEff";
import UseLayoutEffect_UseLayoutEff from "./UseLayoutEffect_UseLayoutEff";

function UseLayoutEffectPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <Back></Back>
      <div>
        <b>Regular useEffect</b>
      </div>
      <br />

      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Increment
      </button>
      <div>{count}</div>

      <ul>
        <li>
          <a href="/useLayoutEffect_UseEff">
            useLayoutEffect - UseEffect - Slow Layout reaction
          </a>
          <div>
            <UseLayoutEffect_UseEff></UseLayoutEffect_UseEff>
          </div>
        </li>
        <br />
        <br />
        <br />
        <li>
          <a href="/useLayoutEffect_UseLayoutEff">
            useLayoutEffect - UseLayoutEffect - Fast Layout reaction
          </a>
          <div>
            <UseLayoutEffect_UseLayoutEff></UseLayoutEffect_UseLayoutEff>
          </div>
        </li>
      </ul>
    </>
  );
}

export default UseLayoutEffectPage;
