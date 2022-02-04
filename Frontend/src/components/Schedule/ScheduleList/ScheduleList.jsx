import React, { useEffect } from 'react';
import ScheduleCard from './ScheduleCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  APPROVED_MEETINGS_REQUEST,
  UPCOMING_MEETINGS_REQUEST,
} from '../../../store/modules/meeting';

export default function ScheduleList() {
  const dispatch = useDispatch();
  // const { upcomingMeetins, upcomingMeetingsDone } = useSelector(
  //   state => state.meeting
  // );
  const { approvedMeetings, approvedMeetingsDone } = useSelector(
    state => state.meeting
  );
  // useEffect(() => {
  //   dispatch({
  //     type: UPCOMING_MEETINGS_REQUEST,
  //     data: { page: 1, size: 10 },
  //   });
  // }, [dispatch]);
  useEffect(() => {
    if (!approvedMeetingsDone) {
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
        approvedMeetings.map(item => (
          <ScheduleCard key={item.meetingId} data={item} />
        ))}
    </>
  );
}
