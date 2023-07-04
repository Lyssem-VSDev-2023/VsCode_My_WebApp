import { useRef, useState } from "react";
import useClickOutside from "./useClickOutside";
import Back from "../../Back";

export default function ClickOutsideComponent() {
  const [open, setOpen] = useState(true);
  const modalRef = useRef(null);

  useClickOutside(modalRef, () => {
    if (open) setOpen(false);
  });

  return (
    <>
      <Back></Back>
      <button type="button" onClick={() => setOpen(true)}>
        Open
      </button>
      <div
        ref={modalRef}
        style={{
          display: open ? "block" : "none",
          backgroundColor: "blue",
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          top: "calc(50% - 50px)",
          left: "calc(50% - 50px)",
        }}
      >
        <span>Modal</span>
      </div>
    </>
  );
}
