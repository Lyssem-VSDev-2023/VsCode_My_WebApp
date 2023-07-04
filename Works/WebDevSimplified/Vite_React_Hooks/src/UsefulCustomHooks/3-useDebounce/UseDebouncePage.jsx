import { useState } from "react";
import useDebounce from "./useDebounce";
import Back from "../../Back";

export default function UseDebouncePage() {
  const [count, setCount] = useState(10);
  useDebounce(() => alert(count), 1000, [count]);

  return (
    <div>
      <Back></Back>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
