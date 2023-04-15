import React from "react";

import "./RightCarouselButton.css";

const RightCarouselButton = ({ children, hasItemsOnRight, handleClick }) => {
  return (
    <div
      className="RightCarouselButton"
      onClick={handleClick}
      style={
        hasItemsOnRight ? { visibility: "visible" } : { visibility: "hidden" }
      }
    >
      {children}
    </div>
  );
};

export default RightCarouselButton;
