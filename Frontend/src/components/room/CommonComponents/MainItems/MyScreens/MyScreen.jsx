import React from 'react';
import styled from 'styled-components';
import { MyScreenDiv } from '../Main.style';
import { useSelector } from 'react-redux';
import UserVideoComponent from '../../../../../pages/Room/UserVideoComponent';

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

  // const { storeSession } = useSelector(state => ({
  //   storeSession: state.MeetingRoom.storeSession,
  // }));

  return (
    <MyScreenDiv>
      <QuestionMyScreen>
        <div>
          {publisher && <UserVideoComponent streamManager={publisher} />}
        </div>
      </QuestionMyScreen>
    </MyScreenDiv>
  );
}
