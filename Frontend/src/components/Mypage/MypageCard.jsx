import React, { useState } from 'react';
import poster from '../../assets/images/poster1.jpg';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import ModalMeetingDetail from '../utils/modal/modalMeetingDetail';
import { setMeetingDetailState } from '../../store/modules/mypage';

export default function MypageCard() {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.mypage);
  const { meetingDetailState } = useSelector(state => state.mypage);

  const onClickButton = () => {
    dispatch(setMeetingDetailState(true));
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
        </div>
      </Grid>
      {meetingDetailState && me.code === 2 && <ModalMeetingDetail />}
    </>
  );
}
