import Back from "../../Back";
import useWindowSize from "./useWindowSize";

export default function WindowSizeComponent() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <Back></Back>
      {width} x {height}
    </div>
  );
}
