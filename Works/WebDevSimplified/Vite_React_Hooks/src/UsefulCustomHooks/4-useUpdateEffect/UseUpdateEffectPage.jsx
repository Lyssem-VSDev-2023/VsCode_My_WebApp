import { useState } from "react";
import useUpdateEffect from "./useUpdateEffect";
import Back from "../../Back";

export default function UseUpdateEffectPage() {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => alert(count), [count]);

  return (
    <div>
      <Back></Back>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
