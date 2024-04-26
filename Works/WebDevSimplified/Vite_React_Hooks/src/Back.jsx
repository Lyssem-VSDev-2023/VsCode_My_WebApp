import React from "react";
import { NavLink } from "react-router-dom";

function Back() {
  return (
    <div>
      <NavLink to={"/reacthooks"}>Back to Hooks list</NavLink>

      <br />
      <br />
    </div>
  );
}

export default Back;
