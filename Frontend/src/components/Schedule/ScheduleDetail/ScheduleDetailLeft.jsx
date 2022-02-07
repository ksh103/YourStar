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

  const showButton = () => {
    const now = new Date();
    console.log(meeting.isReserve);
    if (new Date(meeting.endDate) < now)
      return (
        <ScheduleDetailButton>
          <div>종료</div>
        </ScheduleDetailButton>
      );
    else if (new Date(meeting.startDate) <= now && meeting.isReserve)
      return (
        <ScheduleDetailButton color="2">
          <div>
            <Link to="/room">입장하기</Link>
          </div>
        </ScheduleDetailButton>
      );
    else if (new Date(meeting.openDate) <= now) {
      if (meeting.isReserve)
        return (
          <ScheduleDetailButton color="1">
            <div>
              <Link to="/room">예매취소</Link>
            </div>
          </ScheduleDetailButton>
        );
      return (
        <ScheduleDetailButton color="1">
          <div>
            <Link to="/room">예매하기</Link>
          </div>
        </ScheduleDetailButton>
      );
    } else if (meeting.applicantCnt === meeting.cnt) {
      return (
        <ScheduleDetailButton>
          <div>매진</div>
        </ScheduleDetailButton>
      );
    } else {
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
