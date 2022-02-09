import React from 'react';
import poster from '../../assets/images/poster1.jpg';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import ModalMeetingDetail from '../utils/modal/modalMeetingDetail';
import { setMeetingDetailState, setNowId } from '../../store/modules/mypage';
import { IMAGE_URL } from '../../utils/contants';

export default function StarMypageCard({ meeting }) {
  const dispatch = useDispatch();
  const { meetingDetailState, nowId } = useSelector(state => state.mypage);
  const onClickButton = () => {
    dispatch(setMeetingDetailState(true));
    dispatch(setNowId(meeting.id));
  };
  return (
    <>
      <Grid xs={12} sm={6} md={4} item>
        <div style={{ padding: '10px' }}>
          {meeting.image === null ? (
            <img
              src={'/images/noimg.gif'}
              alt="noimage"
              style={{ width: '100%', objectFit: 'cover', cursor: 'pointer' }}
              onClick={() => {
                onClickButton();
              }}
            />
          ) : (
            <img
              src={`${IMAGE_URL}${meeting.image}`}
              alt={meeting.image}
              style={{ width: '100%', objectFit: 'cover', cursor: 'pointer' }}
              onClick={() => {
                onClickButton();
              }}
            />
          )}
          {meetingDetailState && meeting.id === nowId && (
            // 스타일 때
            <ModalMeetingDetail meeting={meeting} />
          )}
        </div>
      </Grid>
    </>
  );
}

// meetingId={meetingId}
