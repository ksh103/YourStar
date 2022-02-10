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

  const { storeSession } = useSelector(state => ({
    storeSession: state.MeetingRoom.storeSession,
  }));

  const forceMicOff = () => {
    console.log(publisher, '커넥션');
    const connectionId = publisher.stream.connection.connectionId;
    storeSession.signal({
      data: `${connectionId}`,
      to: [connectionId],
      type: 'mic',
    });
  };

  return (
    <MyScreenDiv>
      <QuestionMyScreen>
        <div onClick={() => forceMicOff()}>
          {publisher && <UserVideoComponent streamManager={publisher} />}
        </div>
      </QuestionMyScreen>
    </MyScreenDiv>
  );
}
