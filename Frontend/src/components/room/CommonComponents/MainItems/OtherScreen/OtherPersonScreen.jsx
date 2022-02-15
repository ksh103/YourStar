import React from 'react';
import styled from 'styled-components';
import { OtherPersonDiv } from '../Main.style';
import { useSelector, useDispatch } from 'react-redux';
import UserVideoComponent from '../../../../../pages/Room/UserVideoComponent';
import ConsonantAllRank from '../../RightSideItems/Game/ConsonantGame/ConsonantAllRank';

const OtherPersonSc = styled.div`
  width: 67vw;
  height: 22.4719vh;
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 1vh;
  box-shadow: 0.306vh 0.306vh gray;
  overflow-x: hidden;
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
