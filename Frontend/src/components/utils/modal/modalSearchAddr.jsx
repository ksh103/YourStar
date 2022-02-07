import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DaumPostcode from 'react-daum-postcode';
import { useDispatch, useSelector } from 'react-redux';
import { setAddress, setAddressButton } from '../../../store/modules/member';

const style = {
  position: 'absolute',
  top: '25%',
  left: '49%',
  transform: 'translate(-50%, -50%)',
  width: 400,
};

export default function BasicModal() {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setAddressButton(false)); // modal창 밖을 클릭했을 때 off

  const { addressButton } = useSelector(state => state.member);

  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    dispatch(setAddress(fullAddress)); // reducer에 주소 저장
    dispatch(setAddressButton(false));
  };

  const postCodeStyle = {
    display: 'block',
    position: 'absolute',
    top: '15%',
    width: '420px',
    height: '500px',
    padding: '7px',
  };

  return (
    <div>
      <Modal
        open={addressButton}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
