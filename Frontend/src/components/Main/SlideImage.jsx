import React from 'react';
import Slider from 'react-slick';
import { SlideImageBlock } from './SlideImage.style';
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function SlideImage() {
  return (
    <div>
      <h2>Center Mode</h2>
      {/* <SlideImageBlock> */}
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      {/* </SlideImageBlock> */}
    </div>
  );
}
