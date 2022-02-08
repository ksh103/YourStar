import React from 'react';
import styled from 'styled-components';
import { MainDiv } from '../Main.style';
import StarVideoComponent from '../../../../../pages/Room/DongJun/StarVideoComponent';
import { useSelector, useDispatch } from 'react-redux';
const OXuserSc = styled.div`
  position: relative;
  width: 83.541vw;
  height: 66.5vh;
  background-color: white;
  border-radius: 3.0643vh;
  box-shadow: 0.306vh 0.306vh gray;
`;

export default function OXUserScreen() {
  const { mainStreamManager } = useSelector(state => ({
    mainStreamManager: state.MeetingRoom.mainStreamManager,
  }));
  return (
    <MainDiv className="아따쥑이네">
      <OXuserSc>
        {mainStreamManager && (
          <StarVideoComponent streamManager={mainStreamManager} />
        )}
      </OXuserSc>
    </MainDiv>
  );
}
