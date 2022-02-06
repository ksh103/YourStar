import React from 'react';
import {
  ScheduleDetailButton,
  ScheduleDetailImage,
  ScheduleDetailLeftWrapper,
} from './ScheduleDetail.style';
import poster from '../../../assets/images/poster1.jpg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { maxHeight } from '@mui/system';

export default function ScheduleDetailLeft() {
  const { meeting } = useSelector(state => state.meeting);
  const showButton = () => {
    const now = new Date();
    if (new Date(meeting.endDate) < now)
      return (
        <ScheduleDetailButton>
          <div>종료</div>
        </ScheduleDetailButton>
      );
    else if (new Date(meeting.startDate) <= now)
      return (
        <ScheduleDetailButton color="2">
          <div>
            <Link to="/room">입장하기</Link>
          </div>
        </ScheduleDetailButton>
      );
    else if (new Date(meeting.openDate) <= now)
      return (
        <ScheduleDetailButton color="1">
          <div>
            <Link to="/room">예매하기</Link>
          </div>
        </ScheduleDetailButton>
      );
    else {
      return (
        <ScheduleDetailButton>
          <div>준비중</div>
        </ScheduleDetailButton>
      );
    }
  };
  return (
    <ScheduleDetailLeftWrapper>
      <ScheduleDetailImage>
        <img src={poster} alt="postesr" />
      </ScheduleDetailImage>
      {/* {showButton()} */}
      <ScheduleDetailButton color="1">
        <div>
          <Link to="/room">예매하기</Link>
        </div>
      </ScheduleDetailButton>
    </ScheduleDetailLeftWrapper>
  );
}
