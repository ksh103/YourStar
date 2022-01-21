import React from 'react';
import Button from '@mui/material/Button';
import { SectionBlock, SectionBlock2, MeetStarButton } from './Section.style';
import ButtonGroup from '@mui/material/ButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#acacac',
    },
    secondary: {
      main: '#e40000',
    },
  },
});

export default function Section() {
  return (
    <div>
      <SectionBlock>
        Your star <br />
        당신의 스타를 만나보세요
        <br />
      </SectionBlock>
      <SectionBlock2>
        공연, QnA, 게임, 1:1 미팅 등 스타와 함께하는 <br />
        다양한 팬미팅 컨텐츠, 나만을 위한 스타의 싸인, <br />
        비대면 시대에 새로운 온라인 팬미팅 서비스를 제공합니다
        <br />
      </SectionBlock2>
      <MeetStarButton>
        <ButtonGroup
          color="primary" // 흰색
          variant="contained"
          aria-label="outlined button group"
        >
          <ThemeProvider theme={theme}>
            <Button>Meet star</Button>
          </ThemeProvider>
        </ButtonGroup>
      </MeetStarButton>
    </div>
  );
}
