import React, { useState } from 'react';
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
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { MeetingDetailAPI } from '../../../store/apis/Main/meeting';
import { IMAGE_URL } from '../../../utils/contants';

const settings = {
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
// const datas = [
//   { name: '런닝맨', image: Poster1, id: 1 },
//   { name: '류준열', image: Poster2, id: 2 },
//   { name: '박해진', image: Poster3, id: 3 },
//   { name: '서강준', image: Poster4, id: 4 },
//   { name: '윤아', image: Poster5, id: 5 },
//   { name: '제시카', image: Poster6, id: 6 },
// ];
export default function MainPoster() {
  const { approvedMeetings, approvedMeetingsDone } = useSelector(
    state => state.meeting
  );
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    if (approvedMeetingsDone) {
      const tmp = [];
      approvedMeetings.forEach(meeting => {
        if (meeting.image !== null) {
          tmp.push({ id: meeting.id, image: meeting.image.fileId });
        }
      });
      setDatas(tmp.slice(0, 6));
    }
  }, [approvedMeetings, approvedMeetingsDone]);

  return (
    <MainPosterWrapper>
      <div id="poster">
        <Slider {...settings}>
          {datas.length > 0 &&
            datas.map(data => (
              <MainPosterCard key={data.id}>
                <Link to={`/schedule/${data.id}`}>
                  <img src={`${IMAGE_URL}${data.image}`} alt={data.id} />
                </Link>
              </MainPosterCard>
            ))}
        </Slider>
      </div>
    </MainPosterWrapper>
  );
}
