import React from 'react';
import styled from 'styled-components';
import OXUserScreen from '../../CommonComponents/MainItems/Game/OXUserScreen';
import OtherPersonScreen from '../../CommonComponents/MainItems/OtherScreen/OtherPersonScreen';
import MyScreen from '../../CommonComponents/MainItems/MyScreens/MyScreen';

import * as tmPose from '@teachablemachine/pose';

// 추가
import swal from 'sweetalert';
import { useSelector } from 'react-redux';

// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

export default function UserOXGame() {
  const state = {
    isCorrect: true,
    cnt: 0,
    userAnswer: '',
    answer: 0,
    webcam: null,
    progress: undefined,
    message: undefined,
    loopPredict: undefined,
    maxPredictions: null,
    model: null,
    URL: 'https://teachablemachine.withgoogle.com/models/2c2rSxbLy/',
  };

  const { storeSession, publisher } = useSelector(state => ({
    storeSession: state.MeetingRoom.storeSession,
    publisher: state.MeetingRoom.publisher,
  }));

  // storeSession.on('signal:OXStart', event => {
  //   console.log('=== 유저가 OX게임 시작 신호 받음 ===');
  //   start();
  // });

  storeSession.on('signal:OXEnd', event => {
    console.log('=== 유저가 OX게임 종료 신호 받음 ===');
    let data = event.data.split(',');
    let round = data[0];
    let starAnswer = data[1];

    if (state.userAnswer === starAnswer) {
      swal({
        title: round + '라운드 종료',
        text: '정답',
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
        state.isCorrect = false;
        publisher.publishVideo(false);
      });
    }
  });

  function start() {
    if (state.isCorrect) {
      init();
      swal('준비됬나요?', '게임이 곧 시작됩니다', {
        buttons: false,
        timer: 2000,
      }).then(() => {});
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
    const size = 500;
    const flip = true; // whether to flip the webcam
    state.webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
    await state.webcam.setup(); // request access to the webcam
    await state.webcam.play();
    state.loopPredict = window.requestAnimationFrame(loop); // 예측 반복 작업

    // append/get elements to the DOM
    state.webcam = document.getElementById('webcam');

    state.progress = document.getElementById('progress');
    state.message = document.getElementById('message');
  }

  async function loop() {
    // state.webcam.update(); // webcam update 하고
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

    if (prediction[0].probability > 0.5) {
      document.querySelector('body').style.backgroundColor = 'white';
      document.querySelector('body').style.color = 'black';
    } else {
      document.querySelector('body').style.backgroundColor = 'black';
      document.querySelector('body').style.color = 'white';
    }

    for (let i = 0; i < state.maxPredictions; i++) {
      state.progress.innerHTML = '인식 ' + state.cnt + '% 진행중';

      if (
        prediction[0].probability.toFixed(2) >= 0.5 &&
        state.userAnswer === ''
      ) {
        if (state.answer === 1) {
          state.message.innerHTML = '초기화';
          state.answer = 0;
          state.cnt = 0;
          continue;
        }

        if (state.cnt === 0)
          state.message.innerHTML = '인식 중입니다. 잠시만 기다려주세요';
        state.cnt++;
      } else if (
        prediction[1].probability.toFixed(2) >= 0.5 &&
        state.userAnswer === ''
      ) {
        if (state.answer === 0) {
          state.message.innerHTML = '초기화';
          state.answer = 1;
          state.cnt = 0;
          continue;
        }
        if (state.cnt === 0)
          state.message.innerHTML = '인식 중입니다. 잠시만 기다려주세요';
        state.cnt++;
      }
    }

    if (state.cnt >= 200) {
      state.cnt = 0;
      console.log('인식 성공', state.userAnswer);
      state.userAnswer = state.answer === 0 ? 'O' : 'X';
      state.progress.innerHTML = '인식성공';
      state.message.innerHTML = state.userAnswer;
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
    <BackgroundDiv>
      <OXUserScreen></OXUserScreen>
      <MyScreen></MyScreen>
      <OtherPersonScreen></OtherPersonScreen>
      {/* <button type="button" onClick={() => start()}>
        Start
      </button> */}
      <div id="progress"></div>
      <div id="message"></div>
    </BackgroundDiv>
  );
}
