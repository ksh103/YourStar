import React, { useState } from 'react';
import Slider from 'react-slick';
import { MainPosterCard, MainPosterWrapper } from './MainPoster.style';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
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
          tmp.push({ id: meeting.id, image: meeting.image });
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
