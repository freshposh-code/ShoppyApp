import React from "react";
import { UseStateContext } from "../context/ContextProvider";

const Button = ({ bgColor, color, size, text, borderRadius, icon }) => {
  const { setIsClicked } = UseStateContext();
  return (
    <button
      onClick={() => setIsClicked(false)}
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
