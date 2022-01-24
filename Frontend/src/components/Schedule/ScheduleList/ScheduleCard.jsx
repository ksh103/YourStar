import React from 'react';
import {
  ScheduleCardBlock,
  ScheduleCardRow,
  ScheduleCardImage,
  ScheduleCardContent,
} from './ScheduleList.style';
import poster from '../poster1.jpg';

export default function ScheduleCard({ data }) {
  return (
    <ScheduleCardRow>
      <ScheduleCardBlock>
        <ScheduleCardImage>
          <img src={poster} alt="poster" />
        </ScheduleCardImage>
        <ScheduleCardContent>
          <div id="title">{data.title}</div>
          <div id="date">{data.date}</div>
        </ScheduleCardContent>
      </ScheduleCardBlock>
    </ScheduleCardRow>
  );
}
