import React from 'react';
import ScheduleCard from './ScheduleCard';

export default function ScheduleList({ meeting }) {
  return (
    <>
      {meeting.map(item => (
        <ScheduleCard key={item.id} data={item} />
      ))}
    </>
  );
}
