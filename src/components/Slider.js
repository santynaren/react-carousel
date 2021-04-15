import * as React from 'react';
import { IconButton } from 'components/IconButton';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import 'assets/styles/app.css';
const Slider = ({ images }) => {
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
      <img src={images[count]} alt="images" />
      <IconButton
        actionName="next"
        action={nextSlide}
        visibile={count === images.length - 1 ? false : true}
      >
        <AiFillRightCircle />
      </IconButton>
    </div>
  );
};
export { Slider };
