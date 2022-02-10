import React from 'react';
import styled from 'styled-components';
import OtherScreenAngle from '../MainItems/OtherScreen/OtherScreenAngle';
import { OtherPersonDiv } from '../MainItems/Main.style';
import { useSelector, useDispatch } from 'react-redux';
import UserVideoComponent from '../../../../pages/Room/UserVideoComponent';
const OtherPersonSc = styled.div`
  max-width: 83.541vw;
  width: 83.541vw;
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

const PerScPosition = styled.div`
  position: relative;
  top: 4.5%;
  left: 3%;
`;

export default function LongStick() {
  const { subscribers, storeSession } = useSelector(state => ({
    subscribers: state.MeetingRoom.subscribers,
    storeSession: state.MeetingRoom.storeSession,
  }));

  const forceMicOff = sub => {
    console.log(sub.stream.connection.connectionId, '커넥션id');
    const connectionId = sub.stream.connection.connectionId;
    storeSession.signal({
      data: 'off your mic',
      to: [connectionId],
      type: 'mic',
    });
  };

  return (
    <OtherPersonDiv>
      <OtherPersonSc>
        {subscribers &&
          subscribers.map((sub, i) => (
            <div
              // className="stream-container col-md-6 col-xs-6"
              key={i}
              onClick={() => forceMicOff(sub)}
            >
              <UserVideoComponent streamManager={sub} />
            </div>
          ))}
      </OtherPersonSc>
    </OtherPersonDiv>
  );
}
