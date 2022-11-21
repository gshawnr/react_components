import React, { useState } from "react";

const Nav = ({ onNavChange }) => {
  const [location, setLocation] = useState("Dropdown");

  return (
    <div onClick={onNavChange} style={{ display: "flex", padding: "2% 5%" }}>
      <div style={{ padding: "0 5%" }}>
        <a href="dropdown">Dropdown</a>
      </div>
      <div>
        <a href="accordion">Accordion</a>
      </div>
    </div>
  );
};

export default Nav;
