import { useState } from "react";
import useEffectOnce from "./useEffectOnce";
import Back from "../../Back";

export default function EffectOnceComponent() {
  const [count, setCount] = useState(0);

  useEffectOnce(() => alert("Hi"));

  return (
    <>
      <Back></Back>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </>
  );
}
