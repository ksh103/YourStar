import React from 'react';
import styled from 'styled-components';
import StarVideoComponent from '../../../../pages/Room/StarVideoComponent';
import { MainDiv } from './Main.style';
import { useSelector } from 'react-redux';
import '../../../../pages/Room/UserVideo.css';

const StarScreen = styled.div`
  position: relative;
  width: 63vw;
  height: 67.5vh;
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 1vh;
`;

export default function DefaultUserScreen() {
  const { mainStreamManager, meeting, isOneByOne } = useSelector(state => ({
    mainStreamManager: state.MeetingRoom.mainStreamManager,
    meeting: state.meeting,
    isOneByOne: state.MeetingRoom.isOneByOne,
  }));

  let FILE_ID = meeting.image;
  if (FILE_ID === undefined) FILE_ID = 49;

  return (
    <MainDiv>
      {console.log(isOneByOne)}
      <StarScreen>
        {mainStreamManager !== undefined && !isOneByOne && (
          <StarVideoComponent streamManager={mainStreamManager} />
        )}
      </StarScreen>
    </MainDiv>
  );
}
