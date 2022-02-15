import React from 'react';
import poster from '../../assets/images/poster1.jpg';
import Grid from '@mui/material/Grid';
import ModalMemoryRepository from '../utils/modal/modalMemoryRepository';
import { useSelector, useDispatch } from 'react-redux';
import {
  setMeetingRepositoryState,
  setNowId,
} from '../../store/modules/mypage';
import { IMAGE_URL } from '../../utils/contants';
import { GET_RECORD_REQUEST } from '../../store/modules/meeting';

export default function MypageCard({ meeting }) {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.mypage);
  const { meetingRepositoryState, nowId } = useSelector(state => state.mypage);
  const onClickButton = () => {
    dispatch(setMeetingRepositoryState(true));
    dispatch(setNowId(meeting.meetingId));
    dispatch({
      type: GET_RECORD_REQUEST,
      data: { meetingId: meeting.meetingId, memberId: me.memberId },
    });
  };
  return (
    <>
      <Grid xs={12} sm={6} md={4} item>
        <div style={{ height: '90%', padding: '20px' }}>
          {meeting.image === null ? (
            <img
              src={'/images/noimg.gif'}
              alt="noimage"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => {
                onClickButton();
              }}
            />
          ) : (
            <img
              src={`${IMAGE_URL}${meeting.image}`}
              alt={meeting.image}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => {
                onClickButton();
              }}
            />
          )}
          {meetingRepositoryState && meeting.meetingId === nowId && (
            // 팬 : 추억보관함
            <ModalMemoryRepository meeting={meeting} />
          )}
        </div>
      </Grid>
    </>
  );
}
