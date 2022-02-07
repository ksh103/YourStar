import React from 'react';
import poster from '../../assets/images/poster1.jpg';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import ModalMeetingDetail from '../utils/modal/modalMeetingDetail';
import ModalMemoryRepository from '../utils/modal/modalMemoryRepository';
import { setMeetingDetailState } from '../../store/modules/mypage';

export default function MypageCard(props) {
  const dispatch = useDispatch();
  const { me, menu } = useSelector(state => state.mypage);
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
      {meetingDetailState &&
        me.code === 2 && ( // 스타일 때
          <ModalMeetingDetail data={props.data} />
        )}
      {meetingDetailState &&
        menu === 1 &&
        me.code === 3 && ( // 팬 : 나의 팬미팅
          <div>페이지로 이동</div>
        )}
      {meetingDetailState &&
        menu === 2 &&
        me.code === 3 && ( // 팬 : 추억보관함
          <ModalMemoryRepository data={props.data} />
        )}
    </>
  );
}

// meetingId={meetingId}
