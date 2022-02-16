import React, { useState } from 'react';
import { HalfSideDiv2 } from '../../Chatting/Chatting.style';
import {
  RecogButtonDiv,
  ImgBoxO,
  ImgBoxX,
  SmallBoxOXGame,
  BigBoxOXGame,
  ButtonDiv,
} from './OXButtonStar.style';
import { useSelector, useDispatch } from 'react-redux';
import {
  signalOX,
  oxGameRound,
  oxIncorrectCnt,
  resetCnt,
} from '../../../../../../store/modules/meetingRoom';
import swal from 'sweetalert';
import axios from 'axios';

export default function OXButtonStar() {
  const [isStart, setIsStart] = useState(false);
  const [doneCnt, setDoneCnt] = useState(0);

  const { storeSession, subscribers, backgroundColor } = useSelector(state => ({
    storeSession: state.MeetingRoom.storeSession,
    subscribers: state.MeetingRoom.subscribers,
    backgroundColor: state.MeetingRoom.backgroundColor,
  }));

  const { OXgameCount, OXincorrectCnt } = useSelector(
    state => state.MeetingRoom
  );
  const { me } = useSelector(state => state.mypage);

  const [length, setLength] = useState(subscribers.length);
  const dispatch = useDispatch();
  const OPENVIDU_SERVER_URL = 'https://i6e204.p.ssafy.io:8443';
  const OPENVIDU_SERVER_SECRET = 'YOURSTAR';

  // 스타가 OX 끝남
  const OXClick = e => {
    setIsStart(false);
    dispatch(oxGameRound());
    const sessionId = storeSession.sessionId;

    const data = {
      session: sessionId,
      to: [],
      type: 'signal:OXEnd',
      data: `${OXgameCount},${e}`,
    };
    axios
      .post(OPENVIDU_SERVER_URL + '/openvidu/api/signal', data, {
        headers: {
          Authorization:
            'Basic ' + btoa('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET),
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.error(error));
    dispatch(signalOX(e));

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
    const sessionId = storeSession.sessionId;

    const data = {
      session: sessionId,
      to: [],
      type: 'signal:OXStart',
      data: '',
    };
    axios
      .post(OPENVIDU_SERVER_URL + '/openvidu/api/signal', data, {
        headers: {
          Authorization:
            'Basic ' + btoa('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET),
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.error(error));
    swal({
      title: OXgameCount + '라운드 시작',
      text: '해당 라운드의 정답을 클릭시 라운드가 종료됩니다',
      buttons: false,
      timer: 3000,
    });
  };

  // 스타가 OX게임 세션종료
  const oxStop = e => {
    dispatch(resetCnt()); // store 틀린인원 수 초기화
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

  storeSession.on('signal:OXIncorrect', event => {
    console.log('탈락11111111');
    dispatch(oxIncorrectCnt());
  });

  return (
    <>
      <HalfSideDiv2>
        <BigBoxOXGame>
          {isStart && (
            <>
              {OXincorrectCnt} 다!!<br></br>
              <RecogButtonDiv>
                {length - OXincorrectCnt}명 중에 {doneCnt}명 인식 되었습니다.
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
              </SmallBoxOXGame>
            </>
          )}
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
