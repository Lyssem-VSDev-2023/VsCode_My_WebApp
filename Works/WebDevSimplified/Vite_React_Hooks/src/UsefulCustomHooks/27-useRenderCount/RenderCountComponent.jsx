import useRenderCount from "./useRenderCount";
import useToggle from "../1-useToggle/useToggle";
import Back from "../../Back";

export default function RenderCountComponent() {
  const [bool, toggle] = useToggle(false);

  const renderCount = useRenderCount();

  return (
    <>
      <Back></Back>
      <div>{bool.toString()}</div>
      <div>{renderCount}</div>
      <button onClick={toggle}>Toggle</button>
    </>
  );
}
