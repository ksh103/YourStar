import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { MainDiv } from '../Main.style';
import { useSelector } from 'react-redux';
import StarVideoComponent from '../../../../../pages/Room/StarVideoComponent';
import swal from 'sweetalert';
import './alertCss.css';
import UserVideoComponent from '../../../../../pages/Room/UserVideoComponent';
// 60vw 가로폭
const RandomChoiceSc = styled.div`
  position: relative;
  width: 28.041vw;
  height: 66.5vh;
  background-color: white;
  border-radius: 3.0643vh;
  box-shadow: 0.306vh 0.306vh gray;
  margin-right: 4vw;
`;

const MId = styled.div`
  width

`;

const MainGrid = styled.div`
  width: 100%;
  heigth: 100%;
  display: inline-flex;
`;

const UserList = [
  '동준',
  '지슬',
  '은성',
  '수민',
  '영원',
  '소현',
  '쌈디',
  '물소가이',
  '공혁준',
  '육지담',
];
//git commit -m "[S06P12E204-261] FE-미팅룸UI: RandomGame생성&미팅룸redux 생성 &  "
const shuffleArray = array => {
  for (let i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function RandomChoiceMain() {
  const [result, setResult] = useState(''); // 변경점
  // 랜덤으로 뽑힌 유저의 정보를 모두에게 적용시켜야함
  const [randomUser, setRandomUser] = useState('');

  // store 정보 불러오기
  const { me } = useSelector(state => state.mypage);
  const { mainStreamManager } = useSelector(state => ({
    mainStreamManager: state.MeetingRoom.mainStreamManager,
  }));
  // 유저정보 불러오기 --> 랜덤으로 하나를 뽑기 위함
  const { subscribers, storeSession } = useSelector(state => state.MeetingRoom);

  const onShuffle = e => {
    console.log(e);
    // 아래 리스트만 바뀐 로직은 두세요 추데이터 받아왔을때 실험합니다.
    // const rand = Math.floor(Math.random() * subscribers.length);
    const rand = Math.floor(Math.random() * UserList.length);
    // const randomresult = subscribers[rand];
    const randomresult = subscribers[rand];
    setResult(randomresult);
    storeSession.signal({
      data: randomresult,
      to: [],
      type: 'random',
    });
  };

  storeSession.on('signal:random', event => {
    console.log(event, '========랜덤정보 수신');

    setTimeout(function () {
      swal('3', {
        buttons: false,
        timer: 500,
      }); // 틀렸을 때 게임 다시하기위해 호출하는 함수
    });
    setTimeout(function () {
      swal('2', {
        buttons: false,
        timer: 500,
      }); // 틀렸을 때 게임 다시하기위해 호출하는 함수
    }, 1000);
    setTimeout(function () {
      swal('1', {
        buttons: false,
        timer: 500,
      }); // 틀렸을 때 게임 다시하기위해 호출하는 함수
    }, 2000);
    // 유저컴포정보 띄워주기 !!!
    setTimeout(setRandomUser(event), 3000);
  });

  // 모달에 시간별로 사진 or 텍스트 띄우기
  // const CountAlert = () => {
  //   swal("Here's the title!", "...and here's the text!", {
  //     buttons: false,
  //     timer: 3000,
  //   });
  // };
  // let arr = [3, 2, 1];
  // const countDown = arr.forEach((value, idx) => {
  //   return alert(value, { button: false, timer: 1000 });
  // });

  return (
    <MainDiv>
      <MainGrid>
        <RandomChoiceSc>
          {mainStreamManager && (
            <StarVideoComponent streamManager={mainStreamManager} />
          )}
        </RandomChoiceSc>
        <RandomChoiceSc>
          {me.code === 4 ? (
            <button onClick={onShuffle}>돌려돌려 돌림판!</button>
          ) : null}
          {/* 유저 정보가 들어오면 띄워주기 */}
          {randomUser && (
            <UserVideoComponent streamManager={randomUser}></UserVideoComponent>
          )}
        </RandomChoiceSc>
      </MainGrid>
    </MainDiv>
  );
}
