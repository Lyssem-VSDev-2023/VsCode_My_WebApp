import React from "react";
import { AiOutlineHome } from "react-icons/ai";

function FloatActionButton({ onClick }) {
  return (
    <button type="button" className="float" onClick={onClick}>
      <AiOutlineHome size={30} />
    </button>
  );
}

export default FloatActionButton;
