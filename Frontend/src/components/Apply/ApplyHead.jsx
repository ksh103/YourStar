import React from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';

const ApplyHeadBlock = styled.div`
  margin: 0 1.5em;
  padding: 10px;
  border-bottom: 2px solid gray;
`;

export default function ApplyHead() {
  return (
    <ApplyHeadBlock>
      <TextField
        placeholder="미팅 제목을 입력해주세요"
        variant="outlined"
        sx={{ width: '100%' }}
      />
    </ApplyHeadBlock>
  );
}
