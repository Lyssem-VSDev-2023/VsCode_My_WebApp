import { useState } from "react";
import useTimeout from "./useTimeout";
import Back from "../../Back";

export default function UseTimeoutPage() {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 3000);

  return (
    <div>
      <Back></Back>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </div>
  );
}
