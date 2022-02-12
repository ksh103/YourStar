import React, { useState } from 'react';
import styled from 'styled-components';
import { SmallBox, HalfSideDiv2 } from '../../Chatting/Chatting.style';
import { useSelector, useDispatch } from 'react-redux';
import {
  signalOX,
  oxGameRound,
} from '../../../../../../store/modules/meetingRoom';

import { ScreenChange } from '../../../../../../store/modules/meetingRoom';
import swal from 'sweetalert';
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
  const [isStart, setIsStart] = useState(false);

  const { storeSession, subscribers } = useSelector(state => ({
    storeSession: state.MeetingRoom.storeSession,
    subscribers: state.MeetingRoom.subscribers,
  }));

  const { OXgameCount } = useSelector(state => ({
    OXgameCount: state.MeetingRoom.OXgameCount,
  }));

  const dispatch = useDispatch();

  const OXClick = e => {
    console.log('==== 스타가 OX게임 끝냄 ====');
    setIsStart(false);
    dispatch(oxGameRound());
    storeSession.signal({
      data: `${OXgameCount},${e.target.innerText}`,
      to: [],
      type: 'OXEnd',
    });
    dispatch(signalOX(e.target.innerText));

    swal({
      title: OXgameCount + '라운드 종료',
      text: '정답을 맞추지 못한 유저의 화면이 꺼집니다',
      buttons: false,
      timer: 1500,
    });
  };

  const start = e => {
    console.log('==== 스타가 OX게임 시작 ====');
    setIsStart(true);
    storeSession.signal({
      data: 'Start OX Game',
      to: [],
      type: 'OXStart',
    });
    swal({
      title: OXgameCount + '라운드 시작',
      text: '해당 라운드의 정답을 클릭시 라운드가 종료됩니다',
      buttons: false,
      timer: 3000,
    });
  };

  const oxStop = e => {
    console.log('==== OX게임세션 종료 ====');
    var meetingId = storeSession.sessionId;
    for (var i = 0; i < subscribers.length; i++) {
      if (subscribers[i].stream.videoActive === false) {
        var memberId = JSON.parse(
          subscribers[i].stream.connection.data
        ).memberId;
        console.log(
          '미팅룸 ' + meetingId + '번에서 ' + memberId + '가 살아남았습니다.'
        );
      }
    }
    swal({
      title: 'OX 게임 세션 종료',
      text: '우승자가 DB에 저장되었습니다',
      icon: 'info',
      buttons: false,
      timer: 3000,
    }).then(() => {
      storeSession.signal({
        data: '0',
        to: [],
        type: 'screen',
      });
      dispatch(ScreenChange(0));
    });
  };

  return (
    <>
      <HalfSideDiv2>
        <SmallBox>
          {isStart ? (
            <div>
              <OButton onClick={OXClick}>O</OButton>
              <XButton onClick={OXClick}>X</XButton>
            </div>
          ) : (
            <>
              <button onClick={start}>Start</button>
              <button onClick={oxStop}>OX게임세션 종료</button>
            </>
          )}
        </SmallBox>
      </HalfSideDiv2>
    </>
  );
}
