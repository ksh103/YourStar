import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setMeetingRepositoryState } from '../../../store/modules/mypage';
import { Grid } from '@mui/material';
import { SIGN_URL } from '../../../utils/contants';
import { RecordImageBlock, RecordVideoBlock } from './modal.style';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 500,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  overflow: 'auto',
};

export default function BasicModal({ meeting }) {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setMeetingRepositoryState(false)); // modal창 밖을 클릭했을 때 off

  // useSelector
  const { meetingRepositoryState } = useSelector(state => state.mypage);
  const { record } = useSelector(state => state.meeting);

  const [toggle, setToggle] = useState(0);

  return (
    <div>
      <Modal
        open={meetingRepositoryState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ textAlign: 'center', fontSize: '30px' }}
          >
            {meeting.meetingName} 에서의 추억💕
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Grid container>
              <Grid item xs={6}>
                {toggle === 0 ? (
                  <div
                    style={{
                      textAlign: 'center',
                      cursor: 'pointer',
                      color: 'red',
                      fontSize: '20px',
                    }}
                    onClick={() => {
                      setToggle(0);
                    }}
                  >
                    스타 싸인
                  </div>
                ) : (
                  <div
                    style={{ textAlign: 'center', cursor: 'pointer' }}
                    onClick={() => {
                      setToggle(0);
                    }}
                  >
                    스타 싸인
                  </div>
                )}
              </Grid>
              <Grid item xs={6}>
                {toggle === 1 ? (
                  <div
                    style={{
                      textAlign: 'center',
                      cursor: 'pointer',
                      color: 'red',
                      fontSize: '20px',
                    }}
                    onClick={() => {
                      setToggle(1);
                    }}
                  >
                    녹화 영상
                  </div>
                ) : (
                  <div
                    style={{ textAlign: 'center', cursor: 'pointer' }}
                    onClick={() => {
                      setToggle(1);
                    }}
                  >
                    녹화 영상
                  </div>
                )}
              </Grid>
            </Grid>
            <br />
            {toggle === 0 && (
              <RecordImageBlock>
                <img src={`${SIGN_URL}${record.image}`} alt="사인" />
              </RecordImageBlock>
            )}
            {toggle === 1 && (
              <RecordVideoBlock>
                <video autoPlay loop>
                  <source src={record.video} type="video/mp4"></source>
                </video>
              </RecordVideoBlock>
            )}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
