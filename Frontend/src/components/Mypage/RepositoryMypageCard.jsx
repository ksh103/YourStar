import React from 'react';
import poster from '../../assets/images/poster1.jpg';
import Grid from '@mui/material/Grid';
import ModalMemoryRepository from '../utils/modal/modalMemoryRepository';
import { useSelector, useDispatch } from 'react-redux';
import {
  setMeetingRepositoryState,
  setNowId,
} from '../../store/modules/mypage';

export default function MypageCard({ meeting }) {
  const dispatch = useDispatch();
  const { meetingRepositoryState, nowId } = useSelector(state => state.mypage);
  const onClickButton = () => {
    dispatch(setMeetingRepositoryState(true));
    dispatch(setNowId(meeting.meetingId));
  };
  return (
    <>
      <Grid xs={12} sm={6} md={4} item>
        <div style={{ padding: '10px' }}>
          <img
            src={poster}
            alt="poster"
            style={{ width: '100%', objectFit: 'cover', cursor: 'pointer' }}
            onClick={() => {
              onClickButton();
            }}
          />
          {meetingRepositoryState && meeting.meetingId === nowId && (
            // 팬 : 추억보관함
            <ModalMemoryRepository meeting={meeting} />
          )}
        </div>
      </Grid>
    </>
  );
}
