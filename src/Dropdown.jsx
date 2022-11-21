import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onOptionSelect }) => {
  const [open, setOpen] = useState(false);
  // const [selected, setSelected] = useState(selected);
  const ref = useRef();

  const onBodyClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      return setOpen(false);
    }
  };
  useEffect(() => {
    document
      .querySelector("body")
      .addEventListener("click", (e) => onBodyClick(e), {
        capture: true,
      });

    return document
      .querySelector("body")
      .removeEventListener("click", onBodyClick, { capture: true });
  }, []);

  // options
  const renderedOptions = options.map((item) => {
    return (
      <div
        onClick={() => onOptionSelect(item)}
        className="item"
        key={item.value}
      >
        {item.name}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Choose your color</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <i className="dropdown icon" />
          <div className="text">{selected.name}</div>
          <div className={`menu ${open ? "visible transition" : ""} `}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
