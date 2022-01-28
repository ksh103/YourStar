import React from 'react';
import { Link } from 'react-router-dom';
import { DayBlock, PlanButton } from './ScheduleCalendar.style';

export default function ScheduleCalendarDay({ date, className, schedule }) {
  if (schedule.length > 0) {
  }
  const currentSchedule = schedule.sort((a, b) => {
    const x = new Date(a.meeting_start_date);
    const y = new Date(b.meeting_start_date);
    return x.getTime() - y.getTime();
  });
  const currentPlan = currentSchedule.map(s => {
    return (
      <PlanButton key={s.id} num={s.id}>
        <Link to={`/schedule/${s.id}`}>{s.name}</Link>
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
