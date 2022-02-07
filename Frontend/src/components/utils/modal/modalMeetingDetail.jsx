import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setMeetingDetailState } from '../../../store/modules/mypage';
import { Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setMeetingDetailState(false)); // modal창 밖을 클릭했을 때 off

  // useSelector
  const { meetingDetailState } = useSelector(state => state.mypage);

  const [toggle, setToggle] = useState(0); // 0 : 미팅 참여 인원, 1 : 미팅 게임 내역

  return (
    <div>
      <Modal
        open={meetingDetailState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            미팅 상세정보
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Grid container>
              <Grid item xs={6}>
                <div
                  style={{ textAlign: 'center', cursor: 'pointer' }}
                  onClick={() => {
                    setToggle(0);
                  }}
                >
                  미팅 참여 인원
                </div>
              </Grid>
              <Grid item xs={6}>
                <div
                  style={{ textAlign: 'center', cursor: 'pointer' }}
                  onClick={() => {
                    setToggle(1);
                  }}
                >
                  미팅 게임 내역
                </div>
              </Grid>
            </Grid>
            <br />
            {toggle === 0 && <div>미팅 참여 인원 출력 할 예정</div>}
            {toggle === 1 && <div>미팅 게임 내역 출력 할 예정</div>}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
