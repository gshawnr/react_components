import React, { useRef } from "react";

import RightCarouselButton from "./RightCarouselButton";
import LeftCarouselButton from "./LeftCarouselButton";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import {
  CarouselItem,
  CarouserContainer,
  CarouserContainerInner,
} from "./Carousel.styled";

import { usePosition } from "./usePosition";

export function Carousel({ children }) {
  const ref = useRef();

  const { hasItemsOnLeft, hasItemsOnRight, scrollRight, scrollLeft } =
    usePosition(ref);

  return (
    <CarouserContainer role="region">
      <CarouserContainerInner ref={ref}>
        {React.Children.map(children, (child, index) => (
          <CarouselItem key={index}>{child}</CarouselItem>
        ))}
      </CarouserContainerInner>
      <LeftCarouselButton
        hasItemsOnLeft={hasItemsOnLeft}
        handleClick={scrollLeft}
        // aria-label="Previous slide"
      >
        <ArrowLeft />
      </LeftCarouselButton>
      <RightCarouselButton
        hasItemsOnRight={hasItemsOnRight}
        handleClick={scrollRight}
        // aria-label="Next slide"
      >
        <ArrowRight />
      </RightCarouselButton>
    </CarouserContainer>
  );
}
