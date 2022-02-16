import React from 'react';
import styled from 'styled-components';
import { OtherPersonDiv } from '../MainItems/Main.style';
import { useSelector } from 'react-redux';
import UserVideoComponent from '../../../../pages/Room/UserVideoComponent';
const OtherPersonSc = styled.div`
  width: 83vw;
  height: 24vh;
  padding-left: 1vw;
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 1vh;
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

export default function LongStick() {
  const { subscribers } = useSelector(state => ({
    subscribers: state.MeetingRoom.subscribers,
    storeSession: state.MeetingRoom.storeSession,
  }));

  return (
    <OtherPersonDiv>
      <OtherPersonSc>
        {subscribers &&
          subscribers.map((sub, i) => (
            <div key={i}>
              <UserVideoComponent streamManager={sub} />
            </div>
          ))}
      </OtherPersonSc>
    </OtherPersonDiv>
  );
}
