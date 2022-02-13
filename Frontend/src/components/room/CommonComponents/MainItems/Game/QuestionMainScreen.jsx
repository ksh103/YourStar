import React from 'react';
import styled from 'styled-components';
import { MainDiv } from '../Main.style';
import StarVideoComponent from  '../../../../../pages/Room/StarVideoComponent'
import { useSelector} from 'react-redux';

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

  return (
    <MainDiv>
      <QuestionMain>
        <StarVideoComponent streamManager={mainStreamManager}></StarVideoComponent>
      </QuestionMain>
    </MainDiv>
  );
}
