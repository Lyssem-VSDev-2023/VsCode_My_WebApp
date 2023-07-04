import { useState } from "react";
import useEventListener from "./useEventListener";
import Back from "../../Back";

export default function EventListenerComponent() {
  const [key, setKey] = useState("");
  useEventListener("keydown", (e) => {
    setKey(e.key);
  });

  return (
    <>
      <Back></Back>
      <div>Last Key: {key}</div>
    </>
  );
}
