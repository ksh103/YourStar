import React from 'react';
import { Link } from 'react-router-dom';
import { DayBlock, PlanButton } from './ScheduleCalendar.style';

export default function ScheduleCalendarDay({ date, className, schedule }) {
  if (schedule.length > 0) {
  }
  const currentSchedule = schedule.sort((a, b) => {
    const x = new Date(a.meetingStartDate);
    const y = new Date(b.meetingStartDate);
    return x.getTime() - y.getTime();
  });
  const currentPlan = currentSchedule.map(s => {
    return (
      <PlanButton key={s.meetingId} num={s.meetingId}>
        <Link to={{ pathname: `/schedule/${s.meetingId}`, state: s }}>
          {s.meetingName}
        </Link>
      </PlanButton>
    );
  });

  return (
    <DayBlock className={className}>
      <span className="title">{date}</span>
      {currentPlan}
    </DayBlock>
  );
}
