import React from 'react';
import styled from 'styled-components';
import { OtherPersonDiv } from '../Main.style';
import { useSelector } from 'react-redux';
import UserVideoComponent from '../../../../../pages/Room/UserVideoComponent';

const OtherPersonSc = styled.div`
  padding-left: 1vw;
  width: 66vw;
  height: 23vh;
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 1vh;
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
  white-space: nowrap;
  margin: 0 0;
  display: Flex;
  direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export default function OtherPersonScreen() {
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
