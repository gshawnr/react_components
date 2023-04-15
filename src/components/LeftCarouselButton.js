import React, { Children } from "react";

import "./LeftCarouselButton.css";

const LeftCarouselButton = ({ children, hasItemsOnLeft, handleClick }) => {
  return (
    <div
      className="LeftCarouselButton"
      onClick={handleClick}
      style={
        hasItemsOnLeft ? { visibility: "visible" } : { visibility: "hidden" }
      }
    >
      {children}
    </div>
  );
};

export default LeftCarouselButton;
