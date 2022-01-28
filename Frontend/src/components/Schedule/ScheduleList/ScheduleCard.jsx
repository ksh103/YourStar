import React from 'react';
import {
  ScheduleCardBlock,
  ScheduleCardRow,
  ScheduleCardImage,
  ScheduleCardContent,
} from './ScheduleList.style';
import poster from '../poster1.jpg';
import { Link } from 'react-router-dom';

export default function ScheduleCard({ data }) {
  const meeting_id = 1;
  return (
    <ScheduleCardRow>
      <ScheduleCardBlock>
        <ScheduleCardImage>
          <Link to="/schedule/1">
            <img src={poster} alt="poster" />
          </Link>
        </ScheduleCardImage>
        <ScheduleCardContent>
          <Link to={`/schedule/${meeting_id}`}>
            <div id="title">{data.name}</div>
          </Link>
          <div id="date">{data.meeting_start_date}</div>
        </ScheduleCardContent>
      </ScheduleCardBlock>
    </ScheduleCardRow>
  );
}
