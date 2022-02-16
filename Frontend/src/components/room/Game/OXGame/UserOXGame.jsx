import React, { useState } from 'react';
import OXUserScreen from '../../CommonComponents/MainItems/Game/OXUserScreen';
import OtherPersonScreen from '../../CommonComponents/MainItems/OtherScreen/OtherPersonScreen';
import MyScreen from '../../CommonComponents/MainItems/MyScreens/MyScreen';

import * as tmPose from '@teachablemachine/pose';
import axios from 'axios';

// 추가
import swal from 'sweetalert';
import { useSelector } from 'react-redux';
import { TM_URL } from '../../../../utils/contants';

const OPENVIDU_SERVER_URL = 'https://i6e204.p.ssafy.io:8443';
const OPENVIDU_SERVER_SECRET = 'YOURSTAR';

export default function UserOXGame() {
  const [temp, setTemp] = useState('');
  const [isCorrect, setIsCorrect] = useState(true); // 탈락 여부
  const [recognize, setRecognize] = useState(0); // 인식 여부
  const { storeSession, publisher } = useSelector(state => ({
    storeSession: state.MeetingRoom.storeSession,
    publisher: state.MeetingRoom.publisher,
  }));

  const state = {
    cnt: 0,
    userAnswer: '',
    answer: 0,
    webcam: null,
    loopPredict: undefined,
    maxPredictions: null,
    model: null,
    URL: TM_URL,
  };

  storeSession.on('signal:OXStart', event => {
    console.log('=== 유저가 OX게임 시작 신호 받음 ===');
    setRecognize(0);
    start();
  });

  storeSession.on('signal:OXEnd', event => {
    console.log('=== 유저가 OX게임 종료 신호 받음 ===');
    let data = event.data.split(',');
    let round = data[0];
    let starAnswer = data[1];
    if (isCorrect) {
      if (temp === starAnswer) {
        swal({
          title: round + '라운드 종료',
          text: '정답 50point 적립!',
          icon: 'success',
          buttons: false,
          timer: 1500,
        });
      } else {
        swal({
          title: round + '라운드 종료',
          text: '오답',
          icon: 'error',
          buttons: false,
          timer: 1500,
        }).then(() => {
          setIsCorrect(false);
          publisher.publishVideo(false);
        });
      }
    }
  });

  function start() {
    if (isCorrect) {
      swal('🙆‍♀️ 준비됐나요?  🙅‍♂️', 'O X 동작을 카메라에 보여주세요!', {
        buttons: false,
        timer: 2000,
      }).then(() => {
        init();
      });
    } else {
      swal('다음 라운드 시작', {
        buttons: false,
        timer: 2000,
      }).then(() => {});
    }
  }

  // init() 실행하면 예측 작업이 시작
  async function init() {
    const modelURL = state.URL + 'model.json';
    const metadataURL = state.URL + 'metadata.json';

    state.model = await tmPose.load(modelURL, metadataURL); // 만든 모델에 대한 실체
    state.maxPredictions = state.model.getTotalClasses();

    state.loopPredict = window.requestAnimationFrame(loop); //동작 인식 반복 시작

    state.userAnswer = '';
    state.cnt = 0;

    // Convenience function to setup a webcam
    state.loopPredict = window.requestAnimationFrame(loop); // 예측 반복 작업

    // append/get elements to the DOM
    state.webcam = document.getElementById('webcam');
  }

  async function loop() {
    await predict(); // 예측 작업
    if (state.loopPredict) {
      state.loopPredict = window.requestAnimationFrame(loop); // 반복
    }
  }

  async function predict() {
    const { pose, posenetOutput } = await state.model.estimatePose(
      state.webcam
    );
    const prediction = await state.model.predict(posenetOutput);

    for (let i = 0; i < state.maxPredictions; i++) {
      if (state.cnt % 10 === 0) {
        swal({
          text:
            (state.answer === 0 ? '⭕' : '❌') +
            ' 인식 ' +
            state.cnt +
            '% 진행중...!',
          buttons: false,
          timer: 1000,
        });
      }

      if (
        prediction[0].probability.toFixed(2) >= 0.5 &&
        state.userAnswer === ''
      ) {
        if (state.answer === 1) {
          state.answer = 0;
          state.cnt = 0;
          continue;
        }
        state.cnt++;
      } else if (
        prediction[1].probability.toFixed(2) >= 0.5 &&
        state.userAnswer === ''
      ) {
        if (state.answer === 0) {
          state.answer = 1;
          state.cnt = 0;
          continue;
        }
        state.cnt++;
      }
    }

    if (state.cnt >= 100 && isCorrect) {
      state.userAnswer = state.answer === 0 ? 'O' : 'X';
      setTemp(state.userAnswer);
      swal({
        text:
          (state.answer === 0 ? '⭕' : '❌') + ' 인식 ' + 100 + '% 진행중...!',
        buttons: false,
        timer: 300,
      }).then(() => {
        swal({
          title: (state.answer === 0 ? '⭕' : '❌') + ' 인식 성공!',
          text: '잠시만 기다려 주세요!',
          timer: 2000,
          button: false,
        }).then(() => {
          // 인식완료시 스타에게 정보 보냄
          const sessionId = storeSession.sessionId;

          const data = {
            session: sessionId,
            to: [],
            type: 'signal:OXDone',
            data: '0',
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
        });
      });
      stopMission();
    }
  }

  const stopMission = () => {
    if (state.loopPredict) {
      window.cancelAnimationFrame(state.loopPredict);
      state.loopPredict = undefined;
    }
  };

  return (
    <div>
      <OXUserScreen></OXUserScreen>
      <MyScreen></MyScreen>
      <OtherPersonScreen></OtherPersonScreen>
    </div>
  );
}
