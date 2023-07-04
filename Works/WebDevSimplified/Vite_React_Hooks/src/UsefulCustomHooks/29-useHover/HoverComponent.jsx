import { useRef } from "react";
import useHover from "./useHover";
import Back from "../../Back";

export default function HoverComponent() {
  const elementRef = useRef();
  const hovered = useHover(elementRef);

  return (
    <>
      <Back></Back>
      <div
        ref={elementRef}
        style={{
          backgroundColor: hovered ? "blue" : "red",
          width: "100px",
          height: "100px",
          position: "absolute",
          top: "calc(50% - 50px)",
          left: "calc(50% - 50px)",
        }}
      />
    </>
  );
}
