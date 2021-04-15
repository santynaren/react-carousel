import React from 'react';

const BlockSlideDisplay = ({ title, images }) => {
  return (
    <div>
      <h3>{title}</h3>
      {images.map((image, idx) => {
        return <img key={idx} src={image} alt="images are of random" />;
      })}
    </div>
  );
};

export { BlockSlideDisplay };
