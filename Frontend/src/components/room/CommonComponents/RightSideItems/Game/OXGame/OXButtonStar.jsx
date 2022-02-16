import React, { useEffect, useState } from 'react';
import {
  HalfSideDiv2,
} from '../../Chatting/Chatting.style';
import {RecogButtonDiv, ImgBoxO,ImgBoxX, SmallBoxOXGame, BigBoxOXGame, ButtonDiv} from './OXButtonStar.style';
import { useSelector, useDispatch } from 'react-redux';
import {
  signalOX,
  oxGameRound,
} from '../../../../../../store/modules/meetingRoom';
import swal from 'sweetalert';
import { AddGameScoreAPI } from '../../../../../../store/apis/Room/game';

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
            {/* <OButton onClick={OXClick}>O</OButton>
            <XButton onClick={OXClick}>X</XButton> */}
            {isStart &&(<><RecogButtonDiv>
            {subscribers.length}명 중에 {doneCnt}명 인식 되었습니다.
            </RecogButtonDiv>
            <SmallBoxOXGame>
            <ImgBoxO
                onClick={() => OXClick('O')}
                src="https://cdn-icons-png.flaticon.com/512/3570/3570095.png"
                alt="O"
              ></ImgBoxO>
              <ImgBoxX
                onClick={() => OXClick('X')}
                src="https://cdn-icons-png.flaticon.com/512/3570/3570089.png"
                alt="X"
            ></ImgBoxX>
            </SmallBoxOXGame></>)}
           
        </BigBoxOXGame>
        <ButtonDiv color={backgroundColor}>
        <div>
            <button style={{ fontSize: '1.4vw' }} onClick={start}>
              게임 시작
            </button>
          </div>
          <div>
            <button style={{ fontSize: '1.4vw' }} onClick={oxStop}>
              게임 종료
            </button>
          </div>
          </ButtonDiv>
      </HalfSideDiv2>
    </>
  );
}
