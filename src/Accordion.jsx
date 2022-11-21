import React, { useEffect, useState, useRef } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ options, selectedAccordion, onAccordionSelect }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document
      .querySelector("body")
      .addEventListener("click", (e) => onBodyClick(e));

    return document
      .querySelector("body")
      .removeEventListener("click", (e) => onBodyClick(e));
  }, []);
  return (
    <div className="ui styled accordion fluid" ref={ref}>
      {options.map((item) => {
        return (
          <AccordionItem
            onSelectedChange={onAccordionSelect}
            key={item.title}
            item={item}
            selected={selectedAccordion}
            setOpen={setOpen}
            open={open}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
