import React from 'react';
import styled from 'styled-components';
import { MainDiv } from '../Main.style';
import { useSelector, useDispatch } from 'react-redux';
import UserVideoComponent from '../../../../../pages/Room/UserVideoComponent';

const StarScreen = styled.div`
  overflow-y: auto;
  position: relative;
  width: 63vw;
  height: 90vh;
  background-color: white;
  border-radius: 1vh;
  // box-shadow: 0.306vh 0.306vh gray;
  display: flex;
  justify-content:center;

`;

const PerScPosition = styled.div`
  margin: 1.5vh 0 1.5vh 0.5vw;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
`;

export default function StarChosungScreen() {
  const { subscribers, storeSession } = useSelector(state => ({
    subscribers: state.MeetingRoom.subscribers,
    storeSession: state.MeetingRoom.storeSession,
  }));
  return (
    <MainDiv>
      <StarScreen>
        <PerScPosition>
          {subscribers &&
            subscribers.map((sub, i) => (
              <div
                // className="stream-container col-md-6 col-xs-6"
                key={i}
              >
                <UserVideoComponent streamManager={sub} />
              </div>
            ))}
        </PerScPosition>
      </StarScreen>
    </MainDiv>
  );
}
