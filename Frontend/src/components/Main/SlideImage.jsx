import React from 'react';
import Slider from 'react-slick';
import { SlideImageBlock } from './SlideImage.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Poster1 from './img/런닝맨포스터.jpg';
import Poster2 from './img/류준열포스터.jpg';
import Poster3 from './img/박해진포스터.jpg';
import Poster4 from './img/서강준포스터.jpg';
import Poster5 from './img/윤아포스터.jpg';
import Poster6 from './img/제시카포스터.jpg';
// const size = useWindowSize();
const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  swipe: false,
  // centerMode: true,
  // centerPadding: '110px',
};
// if (size.width < 1000) {
//   settings.slidesToShow = 3;
//   settings.slidesToScroll = 3;
// }
const Poster = [
  { name: '런닝맨', image: Poster1 },
  { name: '류준열', image: Poster2 },
  { name: '박해진', image: Poster3 },
  { name: '서강준', image: Poster4 },
  { name: '윤아', image: Poster5 },
  { name: '제시카', image: Poster6 },
];
export default function SlideImage() {
  return (
    <div>
      <SlideImageBlock>
        <Slider {...settings}>
          {Poster.map(poster => (
            <div>
              <img
                src={poster.image}
                width="480"
                height="620"
                alt="존재하지 않는 이미지 입니다."
              ></img>
            </div>
          ))}
        </Slider>
      </SlideImageBlock>
    </div>
  );
}
