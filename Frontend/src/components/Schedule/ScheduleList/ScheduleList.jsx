import React, { useEffect } from 'react';
import ScheduleCard from './ScheduleCard';
import { useDispatch, useSelector } from 'react-redux';
import { APPROVED_MEETINGS_REQUEST } from '../../../store/modules/meeting';

export default function ScheduleList() {
  const dispatch = useDispatch();
  const { approvedMeetings, approvedMeetingsDone, approvedMeetingsLoading } =
    useSelector(state => state.meeting);
  useEffect(() => {
    if (!approvedMeetingsDone && !approvedMeetingsLoading) {
      dispatch(
        {
          type: APPROVED_MEETINGS_REQUEST,
          data: { page: 1, size: 10 },
        },
        [dispatch]
      );
    }
  });

  return (
    <>
      {approvedMeetingsDone &&
        approvedMeetings.map(meeting => (
          <ScheduleCard key={meeting.id} meeting={meeting} />
        ))}
    </>
  );
}
