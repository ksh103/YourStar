import React from 'react';
import styled from 'styled-components';
import { SmallBox, HalfSideDiv2 } from '../../Chatting/Chatting.style';
import { useSelector, useDispatch } from 'react-redux';
import {
  signalOX,
  oxGameRound,
} from '../../../../../../store/modules/meetingRoom';
const OButton = styled.div`
  position: absolute;
  background-color: #2525ff;
  top: 2vh;
  left: 0.8vw;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4vw;
  border-radius: 1vw;
  height: 13vh;
  width: 18vw;
`;
const XButton = styled.div`
  position: absolute;
  background-color: #ff2525;
  bottom: 2vh;
  left: 0.8vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4vw;
  cursor: pointer;
  border-radius: 1vw;
  height: 13vh;
  width: 18vw;
`;
export default function OXButtonStar() {
  const state = {
    isStart: false,
  };

  const { OXsignal } = useSelector(state => ({
    OXsignal: state.MeetingRoom.OXsignal,
  }));

  const { storeSession } = useSelector(state => ({
    storeSession: state.MeetingRoom.storeSession,
  }));

  const { OXgameCount } = useSelector(state => ({
    OXgameCount: state.MeetingRoom.OXgameCount,
  }));

  const dispatch = useDispatch();

  const OXClick = e => {
    dispatch(oxGameRound());
    storeSession.signal({
      data: `${OXgameCount},${e.target.innerText}`,
      to: [],
      type: 'OX',
    });
    dispatch(signalOX(e.target.innerText));
  };

  const start = e => {
    console.log('==== 스타가 OX게임 시작 ====');
    storeSession.signal({
      data: 'Start OX Game',
      to: [],
      type: 'OXStart',
    });
  };

  return (
    <>
      <HalfSideDiv2>
        <SmallBox>
          {state.isStart ? (
            <div>
              <OButton onClick={OXClick}>O</OButton>
              <XButton onClick={OXClick}>X</XButton>
            </div>
          ) : (
            <button onClick={start}>Start</button>
          )}
        </SmallBox>
      </HalfSideDiv2>
    </>
  );
}
