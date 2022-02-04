import React from 'react';
import {
  ScheduleDetailButton,
  ScheduleDetailImage,
  ScheduleDetailLeftWrapper,
} from './ScheduleDetail.style';
import poster from '../../../assets/images/poster1.jpg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ScheduleDetailLeft() {
  const { meeting } = useSelector(state => state.meeting);
  console.log(meeting);
  return (
    <ScheduleDetailLeftWrapper>
      <ScheduleDetailImage>
        <img src={poster} alt="postesr" />
      </ScheduleDetailImage>
      <ScheduleDetailButton>
        {/* 예매시간전 */}
        <button>준비중</button>
        {/* 예매시간후 */}
        <button>
          <Link to="/room">예매하기</Link>
        </button>
        {/* 시작시간 */}
        <button>
          <Link to="/room">입장하기</Link>
        </button>
        {/* 종료시간 */}
        <button>종료</button>
      </ScheduleDetailButton>
    </ScheduleDetailLeftWrapper>
  );
}
