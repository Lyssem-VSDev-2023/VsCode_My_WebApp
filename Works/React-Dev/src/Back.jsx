import React from "react";
import { Link } from "react-router-dom";

function Back({ setItem }) {
  return (
    <div>
      {/* <a href="/">Home</a> */}
      <Link to="/reactdev" onClick={() => setItem(0)}>
        Back
      </Link>
      <br />
    </div>
  );
}

export default Back;
