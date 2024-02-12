import React from "react";
import './Loader.scss'

/**
 * Loader Component - Displays a visual indicator for loading state.
 * 
 * This component can be used to indicate that a process is ongoing and the user should wait
 * until it completes. It utilizes CSS for animation and styling defined in `Loader.scss`.
 * 
 * @returns {ReactElement} A div element representing the loading animation.
 */

export const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};
