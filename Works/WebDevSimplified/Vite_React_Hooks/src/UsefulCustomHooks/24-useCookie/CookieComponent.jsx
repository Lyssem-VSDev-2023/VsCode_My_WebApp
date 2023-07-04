import Back from "../../Back";
import useCookie from "./useCookie";

export default function CookieComponent() {
  const [value, update, remove] = useCookie("name", "John");

  return (
    <>
      <Back></Back>
      <div>{value}</div>
      <button onClick={() => update("Sally")}>Change Name To Sally</button>
      <button onClick={remove}>Delete Name</button>
    </>
  );
}
