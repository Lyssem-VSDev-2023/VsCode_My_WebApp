import React, { useImperativeHandle } from "react";

function UseImperativeHandleCustomInput(props, ref) {
  useImperativeHandle(
    ref,
    () => {
      return {
        alertValue: () => alert(props.value),
        focusInput: () => ref.current.focus,
      };
    },
    [props.value]
  );

  return (
    <input
      ref={ref}
      style={{
        border: "none",
        backgroundColor: "lightpink",
        padding: ".25em",
        borderBottom: ".1em solid black",
        borderTopRightRadius: ".25em",
        borderTopLeftRadius: ".25em",
      }}
      {...props}
    />
  );
}

export default React.forwardRef(UseImperativeHandleCustomInput);
