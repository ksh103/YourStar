import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { TextField } from '@mui/material';
const Icon = styled.div`
  size: 3vw;
  padding-top: 10px;
  padding-right: 0.5vw;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;
export default function ApplyHead() {
  return (
    <>
      <Icon>
        <IoIosArrowBack />
      </Icon>
      <TextField
        fullWidth
        placeholder="미팅 제목을 입력해주세요"
        variant="outlined"
      />
    </>
  );
}
