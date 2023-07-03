import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

function UseLayoutEffect_UseLayoutEff() {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  useLayoutEffect(() => {
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

export default UseLayoutEffect_UseLayoutEff;
