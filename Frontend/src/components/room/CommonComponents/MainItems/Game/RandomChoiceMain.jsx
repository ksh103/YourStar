import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { MainDiv } from '../Main.style';
import { useSelector } from 'react-redux';
import StarVideoComponent from '../../../../../pages/Room/StarVideoComponent';
import './alertCss.css';
import UserVideoComponent from '../../../../../pages/Room/UserVideoComponent';
import swal from '@sweetalert/with-react';
import './rolling.scss';

const RollingDiv = styled.div`
  width: 20rem;
  display: inline-block;
  position: absolute;
  top: -200px;
  transform: rotateX(-90deg);
  opacity: 0;
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  animation-timing-function: ease;
  &: nth-child(${num});
   {
    animation: rollDown 3s 1;
  }
``
`;

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
export default function RandomChoiceMain() {
  const [test, setTest] = useState(false);
  const [result, setResult] = useState(''); // 변경점
  // 랜덤으로 뽑힌 유저의 정보를 모두에게 적용시켜야함
  const [randomUser, setRandomUser] = useState('');
  const [num, setNum] = useState(0);
  // store 정보 불러오기
  const { me } = useSelector(state => state.mypage);
  const { mainStreamManager } = useSelector(state => ({
    mainStreamManager: state.MeetingRoom.mainStreamManager,
  }));
  // 유저정보 불러오기 --> 랜덤으로 하나를 뽑기 위함
  const { subscribers, storeSession } = useSelector(state => state.MeetingRoom);
  const [pickone, setpickone] = useState('지슬');
  const [studentsName, setstudentsName] = useState([
    '동준',
    '지슬',
    '은성',
    '수민',
    '영원',
    '소현',
    '쌈디',
  ]);
  console.log('⭐⭐⭐⭐픽원 : ', pickone);
  const [sec, setSec] = useState(5);
  const time = useRef(5);
  const timerId = useRef(null);
  useEffect(() => {
    timerId.current = setInterval(() => {
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (time.current < 0) {
      // 만약 타임 아웃이 발생했을 경우

      clearInterval(timerId.current);
    }
  }, [sec]);
  let i = 0;
  const onShuffle = e => {
    console.log(e);
    // 아래 리스트만 바뀐 로직은 두세요 추데이터 받아왔을때 실험합니다.
    // const rand = Math.floor(Math.random() * subscribers.length);
    const rand = Math.floor(Math.random() * UserList.length);
    // const randomresult = subscribers[rand];
    const randomresult = UserList[rand];
    setResult(randomresult);
    storeSession.signal({
      data: randomresult,
      to: [],
      type: 'random',
    });
  };

  storeSession.on('signal:random', event => {
    console.log(event, '========랜덤정보 수신');
    swal({
      buttons: false,
      timer: 5000,
      className: '.countDown',
      content: (
        <div>
          {pickone !== undefined && (
            <>
              <div className="rolling">
                <div className="slider">
                  <div className="caption">
                    행운의 주인공은?!
                    <div className="text-box">
                      <div>{studentsName[i]}</div>
                      <div>{studentsName[(i + 1) % studentsName.length]}</div>
                      <div>{studentsName[(i + 2) % studentsName.length]}</div>
                      <div>{studentsName[(i + 3) % studentsName.length]}</div>
                      <div>{studentsName[(i + 4) % studentsName.length]}</div>
                      <div>{studentsName[(i + 5) % studentsName.length]}</div>
                      {/* <div>{studentsName[(i + 6) % studentsName.length]}</div>
                      <div>{studentsName[(i + 7) % studentsName.length]}</div>
                      <div>{studentsName[(i + 8) % studentsName.length]}</div> */}
                      <div>{pickone}</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ),
    });
  });

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
