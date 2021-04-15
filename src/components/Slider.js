import * as React from 'react';

const Slider = ({ images }) => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <button onClick={() => setCount((val) => val - 1)}>prev</button>
      <img src={images[count]} alt="images" />
      <button onClick={() => setCount((val) => val + 1)}>next</button>
    </>
  );
};
export { Slider };
