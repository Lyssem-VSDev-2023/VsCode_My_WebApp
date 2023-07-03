import React, { useId } from "react";

function UseIdPageEmailForm() {
  const id = useId();

  return (
    <>
      <label htmlFor={`${id}-email`}>Email</label>
      <input id={`${id}-email`} type="email" />
      <br />
      <label htmlFor={`${id}-pass`}>Password</label>
      <input id={`${id}-pass`} type="password" />
    </>
  );
}

export default UseIdPageEmailForm;
