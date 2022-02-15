import React from 'react';
import styled from 'styled-components';
import { MainDiv } from '../Main.style';
import { useSelector } from 'react-redux';
import StarVideoComponent from '../../../../../pages/Room/StarVideoComponent';

const QuestionMain = styled.div`
  /* overflow: auto; */
  position: relative;
  width: 63vw;
  height: 60.5vh;
  // background-color: white;
  border-radius: 1vh;
  // box-shadow: 0.306vh 0.306vh gray;
`;

const UserQuestionMain = styled.div`
  /* overflow: auto; */
  position: relative;
  width: 63vw;
  height: 66.5vh;
  // background-color: white;
  border-radius: 1vh;
  // box-shadow: 0.306vh 0.306vh gray;
`;

export default function QuestionMainScreen() {
  const { mainStreamManager } = useSelector(state => state.MeetingRoom);
  const { me } = useSelector(state => state.mypage);

  return (
    <MainDiv>
      {me.code === 3 ? (
        <UserQuestionMain>
          {mainStreamManager && (
            <StarVideoComponent streamManager={mainStreamManager} />
          )}
        </UserQuestionMain>
      ) : (
        <QuestionMain>
          {mainStreamManager && (
            <StarVideoComponent streamManager={mainStreamManager} />
          )}
        </QuestionMain>
      )}
    </MainDiv>
  );
}
