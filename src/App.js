import "./App.css";
import Dropdown from "./Dropdown";

// dropdown
const dropdownOptions = [
  { name: "Red", value: "red" },
  { name: "Green", value: "green" },
  { name: "Blue", value: "blue" },
];

function App() {
  return (
    <div className="ui container">
      <Dropdown options={dropdownOptions} />
    </div>
  );
}

export default App;
