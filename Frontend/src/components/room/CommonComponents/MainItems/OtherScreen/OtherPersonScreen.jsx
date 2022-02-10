import React from 'react';
import styled from 'styled-components';
import { OtherPersonDiv } from '../Main.style';
import { useSelector, useDispatch } from 'react-redux';
import UserVideoComponent from '../../../../../pages/Room/DongJun/UserVideoComponent';
import ConsonantAllRank from '../../RightSideItems/Game/ConsonantGame/ConsonantAllRank';

const OtherPersonSc = styled.div`
  max-width: 65.041vw;
  width: 65.041vw;
  height: 22.4719vh;
  background-color: white;
  border-radius: 3.0643vh;
  box-shadow: 0.306vh 0.306vh gray;
  overflow-x: auto;
  white-space: nowrap;
  margin: 0 0;
  display: Flex;
  direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export default function OtherPersonScreen() {
  const { subscribers, storeSession } = useSelector(state => ({
    subscribers: state.MeetingRoom.subscribers,
    storeSession: state.MeetingRoom.storeSession,
  }));

  // const forceMicOff = sub => {
  //   console.log(sub.stream.connection.connectionId, '커넥션id');
  //   const connectionId = sub.stream.connection.connectionId;
  //   storeSession.signal({
  //     data: 'off your mic',
  //     to: [connectionId],
  //     type: 'mic',
  //   });
  // };
  return (
    <OtherPersonDiv>
      <OtherPersonSc>
        {subscribers &&
          subscribers.map((sub, i) => (
            <div
              // className="stream-container col-md-6 col-xs-6"
              key={i}
            >
              <UserVideoComponent streamManager={sub} />
            </div>
          ))}
      </OtherPersonSc>
    </OtherPersonDiv>
  );
}
