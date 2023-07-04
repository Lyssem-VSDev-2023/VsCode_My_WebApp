import Back from "../../Back";
import useToggle from "./useToggle";

export default function UseTogglePage() {
  const [value, toggleValue] = useToggle(false);

  return (
    <div>
      <Back></Back>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make True</button>
      <button onClick={() => toggleValue(false)}>Make False</button>
    </div>
  );
}
