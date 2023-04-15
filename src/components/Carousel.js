import React, { useRef } from "react";

import RightCarouselButton from "./RightCarouselButton";
import LeftCarouselButton from "./LeftCarouselButton";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import { usePosition } from "./usePosition";

import "./Carousel.css";

const Carousel = ({ children }) => {
  const ref = useRef();

  const { hasItemsOnLeft, hasItemsOnRight, scrollRight, scrollLeft } =
    usePosition(ref);

  return (
    <div className="CarouselContainer" role="region">
      <LeftCarouselButton
        hasItemsOnLeft={hasItemsOnLeft}
        handleClick={scrollLeft}
        // aria-label="Previous slide"
      >
        <ArrowLeft />
      </LeftCarouselButton>{" "}
      <div className="CarouselContainerInner" ref={ref}>
        {React.Children.map(children, (child, index) => (
          <div className="CarouselItem" key={index}>
            {child}
          </div>
        ))}
      </div>
      <RightCarouselButton
        hasItemsOnRight={hasItemsOnRight}
        handleClick={scrollRight}
        // aria-label="Next slide"
      >
        <ArrowRight />
      </RightCarouselButton>
    </div>
  );
};
export default Carousel;
