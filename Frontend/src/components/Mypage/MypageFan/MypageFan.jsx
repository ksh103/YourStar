import React from 'react';
import { useSelector } from 'react-redux';
import UserMypageCard from '../UserMypageCard';
import RepositoryMypageCard from '../RepositoryMypageCard';
export default function MypageFan() {
  const { selectFanMeetingDone, applicant } = useSelector(state => state.fan);
  const { mymenu } = useSelector(state => state.mypage);
  const now = new Date();
  return (
    <>
      {selectFanMeetingDone &&
        mymenu === 1 &&
        applicant.map(meeting =>
          new Date(meeting.meetingEndDate) > now ? (
            <UserMypageCard meeting={meeting} key={meeting.meetingId} />
          ) : (
            <div key={meeting.meetingId}></div>
          )
        )}
      {selectFanMeetingDone &&
        mymenu === 2 &&
        applicant.map(meeting =>
          new Date(meeting.meetingEndDate) <= now ? (
            <RepositoryMypageCard meeting={meeting} key={meeting.meetingId} />
          ) : (
            <div key={meeting.meetingId}></div>
          )
        )}
    </>
  );
}
