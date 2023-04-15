import { Carousel } from "../components/Carousel";

import { Container, HorizontalCenter, H1, Item } from "./App.styled";

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
  <Item
    size={20}
    style={{ background: color, borderRadius: "20px", opacity: 0.9 }}
    key={color}
  >
    {color}
  </Item>
));

function App() {
  return (
    <Container>
      <H1>Easy Carousel</H1>
      <HorizontalCenter>
        <Carousel>{colorsArray}</Carousel>
      </HorizontalCenter>
    </Container>
  );
}

export default App;
