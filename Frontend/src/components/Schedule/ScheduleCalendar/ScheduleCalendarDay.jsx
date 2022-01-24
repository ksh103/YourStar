import React from 'react';
import { DayBlock, PlanButton } from './ScheduleCalendar.style';

export default function ScheduleCalendarDay({ date, className }) {
  return (
    <DayBlock className={className}>
      <span className="title">{date}</span>
      {/* {mapToPlsan} */}
    </DayBlock>
  );
}
