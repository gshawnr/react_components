import Carousel from "../components/Carousel";

import "./App.css";

const colors = [
  "#f1c40f",
  "#f39c12",
  "#e74c3c",
  "#16a085",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#95a5a6",
];

const colorsArray = colors.map((color) => (
  <div
    className="app-item"
    style={{
      background: color,
    }}
    key={color}
  >
    {color}
  </div>
));

function App() {
  return (
    <div className="app-container">
      <h1 className="h1">Easy Carousel</h1>
      <div className="app-inner-container">
        <Carousel>{colorsArray}</Carousel>
      </div>
    </div>
  );
}

export default App;
