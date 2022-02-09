import React from 'react';
import {
  ScheduleCardBlock,
  ScheduleCardRow,
  ScheduleCardImage,
  ScheduleCardContent,
} from './ScheduleList.style';
import poster from '../poster1.jpg';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function ScheduleCard({ meeting }) {
  const changeDate = d => {
    const date = moment(d, 'YYYY-MM-DD HH:mm:ss');
    return date.format('YYYY년 MM월 DD일 HH시 mm분');
  };
  return (
    <ScheduleCardRow>
      <ScheduleCardBlock>
        <ScheduleCardImage>
          <Link to={{ pathname: `/schedule/${meeting.id}` }}>
            <img src={poster} alt="poster" />
          </Link>
        </ScheduleCardImage>
        <ScheduleCardContent>
          <Link to={{ pathname: `/schedule/${meeting.id}` }}>
            <div id="title">{meeting.name}</div>
          </Link>
          <div id="date">{changeDate(meeting.startDate)}</div>
        </ScheduleCardContent>
      </ScheduleCardBlock>
    </ScheduleCardRow>
  );
}
