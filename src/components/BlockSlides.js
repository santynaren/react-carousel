import * as React from 'react';
import { IconButton, BlockSlideDisplay } from 'components';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import 'assets/styles/app.css';
const BlockSlides = ({ slides }) => {
  const [count, setCount] = React.useState(0);
  const nextSlide = () => {
    setCount((val) => val + 1);
  };
  const prevSlide = () => {
    setCount((val) => val - 1);
  };
  return (
    <div className="sliderContent">
      <IconButton
        actionName="prev"
        action={prevSlide}
        visibile={count <= 0 ? false : true}
      >
        <AiFillLeftCircle />
      </IconButton>
      <BlockSlideDisplay
        title={slides[count].title}
        images={slides[count].images}
      />
      <IconButton
        actionName="next"
        action={nextSlide}
        visibile={count === slides.length - 1 ? false : true}
      >
        <AiFillRightCircle />
      </IconButton>
    </div>
  );
};

export { BlockSlides };
