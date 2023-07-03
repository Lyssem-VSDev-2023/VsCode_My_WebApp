import React, { useEffect, useRef, useState, useLayoutEffect } from "react";

function UseLayoutEffect_UseEff() {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  useEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);

  return (
    <>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Click to popup
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          This is a Popup
        </div>
      )}
    </>
  );
}

export default UseLayoutEffect_UseEff;
