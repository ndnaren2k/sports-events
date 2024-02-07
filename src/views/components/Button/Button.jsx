import React from "react";
import './Button.scss'

export const Button = ({ children, onClick, disabled, ...props }) => {
  return (
    <button className="custom-btn" {...props} onClick={onClick} disabled={disabled} tabIndex="0">
      {children}
    </button>
  );
};
