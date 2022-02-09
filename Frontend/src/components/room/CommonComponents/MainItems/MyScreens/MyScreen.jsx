import React from 'react';
import styled from 'styled-components';
import { MyScreenDiv } from '../Main.style';
import { useSelector } from 'react-redux';
import UserVideoComponent from '../../../../../pages/Room/DongJun/UserVideoComponent';

const QuestionMyScreen = styled.div`
  width: 14.843vw;
  height: 22.47vh;
  background-color: white;
  border-radius: 3vh;
  box-shadow: 0.306vh 0.306vh gray;
`;

export default function MyScreen() {
  const { publisher } = useSelector(state => ({
    publisher: state.MeetingRoom.publisher,
  }));

  return (
    <MyScreenDiv>
      <QuestionMyScreen>
        {publisher && <UserVideoComponent streamManager={publisher} />}
      </QuestionMyScreen>
    </MyScreenDiv>
  );
}
