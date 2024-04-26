import React from "react";
import "font-awesome/css/font-awesome.min.css";
import * as AiIcons from "react-icons/ai";

function FloatActionButton({ onClick }) {
  return (
    // <a href="#" className="float" onDoubleClick={onClick}>
    //   <i className="fa-solid fa-plus fa-plus my-float"></i>
    // </a>
    <button type="button" className="float" onClick={onClick}>
      <AiIcons.AiOutlineHome size={30} />
    </button>
  );
}

export default FloatActionButton;
