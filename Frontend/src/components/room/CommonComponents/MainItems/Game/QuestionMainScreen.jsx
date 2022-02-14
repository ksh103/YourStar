import React from 'react';
import styled from 'styled-components';
import { MainDiv } from '../Main.style';
import { useSelector } from 'react-redux';
import StarVideoComponent from '../../../../../pages/Room/StarVideoComponent';

const QuestionMain = styled.div`
  overflow: auto; 
  position: relative;
  width: 60.041vw;
  height: 60.5vh;
  background-color: white;
  border-radius: 3.0643vh;
  box-shadow: 0.306vh 0.306vh gray;
`;

export default function QuestionMainScreen() {
  const { mainStreamManager } = useSelector(state => state.MeetingRoom);
  const { me } = useSelector(state => state.mypage);

  return (
    <MainDiv>
      <QuestionMain style={me.code === 3 ? { height: '66.5vh' } : null}>
        {mainStreamManager && (
          <StarVideoComponent streamManager={mainStreamManager} />
        )}
      </QuestionMain>
    </MainDiv>
  );
}
