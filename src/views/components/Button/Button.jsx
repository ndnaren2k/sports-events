import React from "react";
import './Button.scss'


/**
 * Button Component - Renders a customizable button.
 * 
 * @param {Object} props
 * @param {ReactNode} props.children - Content to be displayed inside the button.
 * @param {Function} props.onClick - Handler for click events.
 * @param {string} [props.className] - CSS classes for styling the button.
 * @param {boolean} [props.disabled=false] - If true, disables the button.
 * @param {Object} [props.rest] - Additional props spread onto the button element.
 * 
 * @returns {ReactElement} A button element.
 */

export const Button = ({ children, onClick,classname, disabled, ...props }) => {
  return (
    <button className={classname} {...props} onClick={onClick} disabled={disabled} tabIndex="0">
      {children}
    </button>
  );
};
