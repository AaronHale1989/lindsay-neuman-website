import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

import './carousel.styles.scss';

const items = [
  {
    src: './images/01.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: './images/02.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: './images/03.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: './images/04.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const CarouselBanner = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img width='700px' height='467px' src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  const carouselStyle = {
      left: '80px'
  }

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl style={carouselStyle} direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CarouselBanner;