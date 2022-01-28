import React from 'react';
import {
  ScheduleDetailButton,
  ScheduleDetailImage,
  ScheduleDetailLeftWrapper,
} from './ScheduleDetail.style';
import poster from '../../../assets/images/poster1.jpg';
import { Link } from 'react-router-dom';

export default function ScheduleDetailLeft() {
  return (
    <ScheduleDetailLeftWrapper>
      <ScheduleDetailImage>
        <img src={poster} alt="postesr" />
      </ScheduleDetailImage>
      <ScheduleDetailButton>
        <button>
          <Link to="/room">입장하기</Link>
        </button>
      </ScheduleDetailButton>
    </ScheduleDetailLeftWrapper>
  );
}
