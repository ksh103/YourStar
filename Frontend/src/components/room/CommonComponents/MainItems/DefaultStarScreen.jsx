import React from 'react';
import styled from 'styled-components';
import StarVideoComponent from '../../../../pages/Room/StarVideoComponent';
import { MainDiv } from './Main.style';
import { useSelector } from 'react-redux';

const StarScreen = styled.div`
  overflow: auto;
  position: relative;
  width: 60.041vw;
  height: 66.5vh;
  background-color: white;
  border-radius: 3.0643vh;
  box-shadow: 0.306vh 0.306vh gray;
`;

export default function DefaultUserScreen() {
  const { mainStreamManager } = useSelector(state => ({
    mainStreamManager: state.MeetingRoom.mainStreamManager,
  }));
  return (
    <MainDiv>
      <StarScreen>
        {mainStreamManager && (
          <StarVideoComponent streamManager={mainStreamManager} />
        )}
      </StarScreen>
    </MainDiv>
  );
}
