import React, { useState } from "react";
import "./App.css";
import Dropdown from "./Dropdown";
import Accordion from "./Accordion";
import Router from "./Router";
import Nav from "./Nav";

// dropdown
const dropdownOptions = [
  { name: "Red", value: "red" },
  { name: "Green", value: "green" },
  { name: "Blue", value: "blue" },
];

const accordionOptions = [
  { title: "What is a dog?", content: "A dog is ...." },
  {
    title: "What kinds of dog are there?",
    content: "There are many kinds of dogs...",
  },
  {
    title: "Some other dog question",
    content: "So much more information about dogs...",
  },
];

function App() {
  const [selectedDropdown, setDropdown] = useState(dropdownOptions[0]);
  const [selectedAccordion, setAccordion] = useState(accordionOptions[0]);
  const [location, setLocation] = useState("Dropdown");

  const onDropdownSelect = (option) => {
    setDropdown(option);
  };

  const onAccordionSelect = (option) => {
    setAccordion(option);
  };

  // const nav = "Accordion";
  const onNavChange = (e) => {
    e.preventDefault();
    if (e.target && e.target.innerText) {
      switch (e.target.innerText) {
        case "Accordion":
          setLocation("Accordion");
          break;
        default:
          setLocation("Dropdown");
      }
    }
  };

  return (
    <div className="ui container">
      <Nav onNavChange={onNavChange} />
      <Router navigation={location}>
        <Dropdown
          options={dropdownOptions}
          selected={selectedDropdown}
          onOptionSelect={onDropdownSelect}
        />
      </Router>
      <Router navigation={location}>
        <Accordion
          options={accordionOptions}
          selectedAccordion={selectedAccordion}
          onAccordionSelect={onAccordionSelect}
        />
      </Router>
    </div>
  );
}

export default App;
