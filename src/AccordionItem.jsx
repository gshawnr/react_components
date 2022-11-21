import React, { Fragment } from "react";

const AccordionItem = ({ item, selected, onSelectedChange, open, setOpen }) => {
  return (
    <Fragment>
      <div
        onClick={() => {
          onSelectedChange(item);
          setOpen(true);
        }}
        className={`title ${
          item.title === selected.title && open ? "active" : ""
        }`}
      >
        <i className="dropdown icon" />
        {item.title}
      </div>
      <div
        className={`content ${
          item.content === selected.content && open ? "active" : ""
        }`}
      >
        <p>{item.content}</p>
      </div>
    </Fragment>
  );
};

export default AccordionItem;
