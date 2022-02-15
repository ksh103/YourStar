import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  BigBoxOXGame,
  SmallBoxOXGame,
  HalfSideDiv2,
} from '../../Chatting/Chatting.style';
import { useSelector, useDispatch } from 'react-redux';
import {
  signalOX,
  oxGameRound,
} from '../../../../../../store/modules/meetingRoom';

import { ScreenChange } from '../../../../../../store/modules/meetingRoom';
import swal from 'sweetalert';
import { AddGameScoreAPI } from '../../../../../../store/apis/Room/game';
// const OButton = styled.div`
//   position: absolute;
//   background-color: #2525ff;
//   top: 2vh;
//   left: 0.8vw;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 4vw;
//   border-radius: 1vw;
//   height: 13vh;
//   width: 18vw;
// `;
// const XButton = styled.div`
//   position: absolute;
//   background-color: #ff2525;
//   bottom: 2vh;
//   left: 0.8vw;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 4vw;
//   cursor: pointer;
//   border-radius: 1vw;
//   height: 13vh;
//   width: 18vw;
// `;

const RecogButtonDiv = styled.div`
  background-color: #f5f5f5;
  border-radius: 1vw;
  padding: 10px;
  font-size: 1.4vw;
  width: 6vw;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StartButtonDiv = styled.div`
  background-color: white;
  border-radius: 1vw;
  padding: 10px;
  margin: 2px;
  &:active {
    -webkit-transform: scale(0.9, 0.9);
    -moz-transform: scale(0.9, 0.9);
    -ms-transform: scale(0.9, 0.9);
    -o-transform: scale(0.9, 0.9);
    transform: scale(0.9, 0.9);
  }
  &:hover{
    background-color: ${props => props.color};
  }
`;
const EndButtonDiv = styled.div`
  background-color: white;
  border-radius: 1vw;
  padding: 10px;
  margin: 2px;
  &:active {
    -webkit-transform: scale(0.9, 0.9);
    -moz-transform: scale(0.9, 0.9);
    -ms-transform: scale(0.9, 0.9);
    -o-transform: scale(0.9, 0.9);
    transform: scale(0.9, 0.9);
  }
  &:hover{
    background-color: ${props => props.color};
  }
`;
const ImgBoxO = styled.img`
  display: block;
  cursor: pointer;
  max-height: 80%;
  padding: 5px;
  &:hover{
    background-color: green;
  }
`;

const ImgBoxX = styled.img`
  display: block;
  cursor: pointer;
  max-height: 80%;
  padding: 5px;
  &:hover{
    background-color: red;
  }
`;

export default function OXButtonStar() {
  const [isStart, setIsStart] = useState(false);
  const [doneCnt, setDoneCnt] = useState(0);

  const { storeSession, subscribers, backgroundColor } = useSelector(state => ({
    storeSession: state.MeetingRoom.storeSession,
    subscribers: state.MeetingRoom.subscribers,
    backgroundColor: state.MeetingRoom.backgroundColor
  }));

  const { OXgameCount } = useSelector(state => ({
    OXgameCount: state.MeetingRoom.OXgameCount,
  }));

  const dispatch = useDispatch();

  // 스타가 OX 끝남
  const OXClick = e => {
    setIsStart(false);
    dispatch(oxGameRound());
    storeSession.signal({
      data: `${OXgameCount},${e}`,
      to: [],
      type: 'OXEnd',
    });
    dispatch(signalOX(e));

    var meetingId = storeSession.sessionId;
    for (var i = 0; i < subscribers.length; i++) {
      if (subscribers[i].stream.videoActive) {
        var memberId = JSON.parse(
          subscribers[i].stream.connection.data
        ).memberId;
        AddGameScoreAPI(meetingId, memberId); // 살아남은 사람 점수 추가 API
      }
    }

    swal({
      title: OXgameCount + '라운드 종료',
      text: '정답을 맞추지 못한 유저의 화면이 꺼집니다\n점수가 DB에 반영되었습니다',
      buttons: false,
      timer: 2000,
    });
  };

  // 스타가 OX게임 시작시킴
  const start = e => {
    setDoneCnt(0);
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

  // 스타가 OX게임 세션종료
  const oxStop = e => {
    storeSession.signal({
      // 종료 버튼 클릭
      data: '0',
      to: [],
      type: 'endOX',
    });
  };

  // OX 게임 인식 완료 신호 수신
  storeSession.on('signal:OXDone', event => {
    setDoneCnt(doneCnt + 1);
  });

  return (
    <>
      <HalfSideDiv2>
        <BigBoxOXGame>
          <SmallBoxOXGame>
            <RecogButtonDiv>
              <div>{doneCnt} / {subscribers.length}</div>
            </RecogButtonDiv>
            <StartButtonDiv color={backgroundColor}>
              <button style={{ fontSize: '1.3vw' }} onClick={start}>
                게임시작
              </button>
            </StartButtonDiv>
            <EndButtonDiv color={backgroundColor}>
              <button style={{ fontSize: '1.3vw' }} onClick={oxStop}>
                게임종료
              </button>
            </EndButtonDiv>
          </SmallBoxOXGame>
          <SmallBoxOXGame>
            {/* <OButton onClick={OXClick}>O</OButton>
            <XButton onClick={OXClick}>X</XButton> */}
            <ImgBoxO
              onClick={() => OXClick('O')}
              src="https://cdn-icons-png.flaticon.com/512/3570/3570095.png"
              alt="O"
            ></ImgBoxO>
            <ImgBoxX
              onClick={() => OXClick('O')}
              src="https://cdn-icons-png.flaticon.com/512/3570/3570089.png"
              alt="X"
            ></ImgBoxX>
          </SmallBoxOXGame>
        </BigBoxOXGame>
      </HalfSideDiv2>
    </>
  );
}
