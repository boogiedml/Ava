import React from "react";

const Button = ({ name, type, backgroundColor, onClick, disabled }) => {
  return (
    <button
      type={type ? type : "button"}
      onClick={onClick}
      className={`p-3 text-sm ${backgroundColor} rounded hover:-translate-y-1 transition-all duration-500`}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default Button;
