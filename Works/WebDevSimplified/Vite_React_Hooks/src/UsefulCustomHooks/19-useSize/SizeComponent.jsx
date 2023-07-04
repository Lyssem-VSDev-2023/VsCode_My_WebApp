import { useRef } from "react";
import useSize from "./useSize";
import Back from "../../Back";

export default function SizeComponent() {
  const ref = useRef();
  const size = useSize(ref);

  return (
    <>
      <Back></Back>
      <div>{JSON.stringify(size)}</div>
      <textarea ref={ref}></textarea>
    </>
  );
}
