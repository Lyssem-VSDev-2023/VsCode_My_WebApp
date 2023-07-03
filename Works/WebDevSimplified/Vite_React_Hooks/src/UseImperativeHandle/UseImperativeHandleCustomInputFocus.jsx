import { forwardRef, useRef, useImperativeHandle } from "react";

const UseImperativeHandleCustomInputFocus = forwardRef(
  function UseImperativeHandleCustomInputFocus(props, ref) {
    const inputRef = useRef(null);

    useImperativeHandle(
      ref,
      () => {
        return {
          focus() {
            inputRef.current.focus();
          },
          scrollIntoView() {
            inputRef.current.scrollIntoView();
          },
          alertValue() {
            alert(inputRef.current.value);
          },
        };
      },
      []
    );

    return <input {...props} ref={inputRef} />;
  }
);

export default UseImperativeHandleCustomInputFocus;
