import React from 'react';
import styled from 'styled-components';
import OtherScreenAngle from '../MainItems/OtherScreen/OtherScreenAngle';
import { OtherPersonDiv } from '../MainItems/Main.style';
import { useSelector, useDispatch } from 'react-redux';
import UserVideoComponent from '../../../../pages/Room/UserVideoComponent';
const OtherPersonSc = styled.div`
  max-width: 84vw;
  width: 84vw;
  height: 24vh;
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 1vh;
  // box-shadow: 0.306vh 0.306vh gray;
  white-space: nowrap;
  display: Flex;
  direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d2d0d0;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
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
