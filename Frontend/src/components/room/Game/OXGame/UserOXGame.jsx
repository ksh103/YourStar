import React, { useState } from 'react';
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
  const [isCorrect, setIsCorrect] = useState(true);
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
    URL: 'https://teachablemachine.withgoogle.com/models/2c2rSxbLy/',
  };

  storeSession.on('signal:OXStart', event => {
    console.log('=== 유저가 OX게임 시작 신호 받음 ===');
    start();
  });

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
        setIsCorrect(false);
        publisher.publishVideo(false);
      });
    }
  });

  function start() {
    if (isCorrect) {
      init();
      swal('준비됐나요?', 'O X 동작을 카메라에 보여주세요!', {
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
    state.loopPredict = window.requestAnimationFrame(loop); // 예측 반복 작업

    // append/get elements to the DOM
    state.webcam = document.getElementById('webcam');
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

    for (let i = 0; i < state.maxPredictions; i++) {
      swal({
        text:
          (state.answer === 0 ? '⭕' : '❌') +
          ' 인식 ' +
          state.cnt +
          '% 진행중...!',
        buttons: false,
        timer: 1000,
        customClass: 'sweet-color',
      }).then(() => {});
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

    if (state.cnt >= 100) {
      state.userAnswer = state.answer === 0 ? '⭕' : '❌';
      swal({
        title: (state.userAnswer === 'o' ? '⭕' : '❌') + ' 인식 성공!',
        text: '잠시만 기다려 주세요!',
        timer: 2000,
      }).then(() => {});

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
    </BackgroundDiv>
  );
}
