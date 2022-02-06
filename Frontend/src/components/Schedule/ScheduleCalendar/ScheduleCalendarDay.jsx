import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DayBlock, PlanButton } from './ScheduleCalendar.style';

export default function ScheduleCalendarDay({ date, className, meetings }) {
  useEffect(() => {
    if (meetings.length > 0) {
      meetings.sort((a, b) => {
        const x = new Date(a.startDate);
        const y = new Date(b.startDate);
        return x.getTime() - y.getTime();
      });
    }
  }, [meetings]);
  const schedules = () => {
    return meetings.map(meeting => {
      const now = new Date().getTime();
      const meetingEndDate = new Date(meeting.endDate).getTime();
      return (
        <PlanButton
          key={meeting.id}
          color={meetingEndDate < now ? -1 : meeting.id}
        >
          <Link to={{ pathname: `/schedule/${meeting.id}` }}>
            {meeting.name}
          </Link>
        </PlanButton>
      );
    });
  };
  return (
    <DayBlock className={className}>
      <span className="title">{date}</span>
      {schedules()}
    </DayBlock>
  );
}
