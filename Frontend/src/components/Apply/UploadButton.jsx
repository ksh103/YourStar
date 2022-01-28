import { IconButton } from '@mui/material';
import React from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { styled } from '@mui/material/styles';
import { pointColor } from '../../styles/variables';

const Input = styled('input')({
  display: 'none',
});

export default function UploadButton() {
  return (
    <>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton
          style={{ color: pointColor }}
          aria-label="upload picture"
          component="span"
        >
          <IoIosAddCircleOutline size={'40px'} />
        </IconButton>
      </label>
    </>
  );
}
