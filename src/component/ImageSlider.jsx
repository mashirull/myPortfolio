import React from 'react';
import Slider from 'react-slick';

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const openProjectInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} onClick={() => openProjectInNewTab(image.projectUrl)}>
          <img src={image.imageUrl} alt={`Project ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
