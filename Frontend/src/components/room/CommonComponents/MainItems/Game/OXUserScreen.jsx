import React from 'react';
import styled from 'styled-components';
import { MainDiv } from '../Main.style';
import StarVideoComponent from '../../../../../pages/Room/StarVideoComponent';
import { useSelector } from 'react-redux';

const OXuserSc = styled.div`
  position: relative;
  width: 83.541vw;
  height: 66.5vh;
  border-radius: 1vh;
`;

export default function OXUserScreen() {
  const { mainStreamManager } = useSelector(state => ({
    mainStreamManager: state.MeetingRoom.mainStreamManager,
  }));
  return (
    <MainDiv>
      <OXuserSc>
        {mainStreamManager && (
          <StarVideoComponent streamManager={mainStreamManager} />
        )}
      </OXuserSc>
    </MainDiv>
  );
}
