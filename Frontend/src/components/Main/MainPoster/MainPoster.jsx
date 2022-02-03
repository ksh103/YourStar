import React from 'react';
import Slider from 'react-slick';
import { MainPosterCard, MainPosterWrapper } from './MainPoster.style';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Poster1 from '../img/런닝맨포스터.jpg';
import Poster2 from '../img/류준열포스터.jpg';
import Poster3 from '../img/박해진포스터.jpg';
import Poster4 from '../img/서강준포스터.jpg';
import Poster5 from '../img/윤아포스터.jpg';
import Poster6 from '../img/제시카포스터.jpg';
import { Link } from 'react-router-dom';

const settings = {
  // dots: true,
  // infinite: true,
  // speed: 1500,
  // autoplaySpeed: 5000,
  // slidesToShow: 3,
  // slidesToScroll: 1,
  // autoplay: true,
  // arrows: false,
  // swipe: false,
  // centerMode: true,
  // centerPadding: '110px',
  dots: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const datas = [
  { name: '런닝맨', image: Poster1, id: 1 },
  { name: '류준열', image: Poster2, id: 2 },
  { name: '박해진', image: Poster3, id: 3 },
  { name: '서강준', image: Poster4, id: 4 },
  { name: '윤아', image: Poster5, id: 5 },
  { name: '제시카', image: Poster6, id: 6 },
];
export default function MainPoster() {
  return (
    <MainPosterWrapper>
      <div id="poster">
        <Slider {...settings}>
          {datas.map(data => (
            <MainPosterCard key={data.id}>
              <Link to={`/schedule/${data.id}`}>
                <img src={data.image} alt={data.name} />
              </Link>
            </MainPosterCard>
          ))}
        </Slider>
      </div>
    </MainPosterWrapper>
  );
}
