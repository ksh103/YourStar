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
  return (
    <ScheduleCardRow>
      <ScheduleCardBlock>
        <ScheduleCardImage>
          <Link to={{ pathname: `/schedule/${data.meetingId}`, state: data }}>
            <img src={poster} alt="poster" />
          </Link>
        </ScheduleCardImage>
        <ScheduleCardContent>
          <Link to={{ pathname: `/schedule/${data.meetingId}`, state: data }}>
            <div id="title">{data.meetingName}</div>
          </Link>
          <div id="date">{data.meeting_start_date}</div>
        </ScheduleCardContent>
      </ScheduleCardBlock>
    </ScheduleCardRow>
  );
}
