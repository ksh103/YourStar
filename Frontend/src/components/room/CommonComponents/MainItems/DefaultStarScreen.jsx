import React from 'react';
import styled from 'styled-components';
import StarVideoComponent from '../../../../pages/Room/StarVideoComponent';
import { MainDiv } from './Main.style';
import { useSelector } from 'react-redux';
import { IMAGE_URL } from '../../../../utils/contants';
import '../../../../pages/Room/UserVideo.css';

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
  const { mainStreamManager, meeting, isOneByOne } = useSelector(state => ({
    mainStreamManager: state.MeetingRoom.mainStreamManager,
    meeting: state.meeting,
    isOneByOne: state.MeetingRoom.isOneByOne,
  }));

  let FILE_ID = meeting.image;
  if (FILE_ID === undefined) FILE_ID = 49;

  let innerText = '1대1 미팅 대기중';
  if (!isOneByOne) innerText = '스타 기다리는 중..';

  return (
    <MainDiv>
      {console.log(isOneByOne)}
      <StarScreen>
        {mainStreamManager !== undefined && !isOneByOne ? (
          <StarVideoComponent streamManager={mainStreamManager} />
        ) : (
          <div className="center">
            <div className="WaitText">{innerText}</div>
            <img
              src={`${IMAGE_URL}${FILE_ID}`}
              className="WaitImg"
              alt={FILE_ID}
            />
          </div>
        )}
        {isOneByOne ? (
          <div className="center">
            <div className="WaitText">{innerText}</div>
            <img
              src={`${IMAGE_URL}${FILE_ID}`}
              className="WaitImg"
              alt={FILE_ID}
            />
          </div>
        ) : null}
      </StarScreen>
    </MainDiv>
  );
}
