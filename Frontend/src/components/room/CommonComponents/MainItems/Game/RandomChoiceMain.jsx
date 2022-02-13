import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { MainDiv } from '../Main.style';
import { useDispatch, useSelector } from 'react-redux';
import StarVideoComponent from '../../../../../pages/Room/StarVideoComponent';
// import './alertCss.css';
import UserVideoComponent from '../../../../../pages/Room/UserVideoComponent';
import swal from '@sweetalert/with-react';
import './rolling.scss';
import {
  randomResult,
  randomSub,
} from '../../../../../store/modules/meetingRoom';
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
  height: 100%;
  display: inline-flex;
`;

//git commit -m "[S06P12E204-261] FE-미팅룸UI: RandomGame생성&미팅룸redux 생성 &  "
export default function RandomChoiceMain() {
  const { me } = useSelector(state => state.mypage);
  const [somone, setSomeone] = useState('');
  const [userscreen, setUserScreen] = useState(false);
  const { mainStreamManager, randomPerson } = useSelector(state => ({
    mainStreamManager: state.MeetingRoom.mainStreamManager,
    randomPerson: state.MeetingRoom.randomPerson,
  }));
  // 유저정보 불러오기 --> 랜덤으로 하나를 뽑기 위함
  const { subscribers, storeSession, publisher } = useSelector(
    state => state.MeetingRoom
  );
  const dispatch = useDispatch();
  const randomoneperson = Input => dispatch(randomResult(Input));
  // const Subs = Input => dispatch(randomSub(Input));
  //

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
    const rand = Math.floor(Math.random() * subscribers.length);
    const randomresult = subscribers[rand];
    const ran = randomresult.stream.connection.data;
    const usersNick = subscribers.map((sub, idx) => {
      const obj = JSON.parse(sub.stream.connection.data);
      return obj.clientData;
    });

    const ranList = JSON.stringify(usersNick);

    storeSession.signal({
      data: `${ranList}/${ran}`,
      to: [],
      type: 'randomresult',
    });
    const ranparse = JSON.parse(ran);
    const nickoflucky = ranparse.clientData;
    console.log(nickoflucky, '당첨자 닉네임');
    randomoneperson(nickoflucky);
    setSomeone(randomresult);
  };

  storeSession.on('signal:randomresult', event => {
    console.log('이벤트 받음!');
    const arr = event.data.split('/');
    const dangchum = JSON.parse(arr[1]);
    const Lists = JSON.parse(arr[0]);
    if (me.code === 3) {
      if (me.nick === dangchum.clientData) {
        console.log('이건내가당첨정보오오⭐⭐⭐⭐');
        setSomeone(publisher);
      } else {
        subscribers.map((sub, idx) => {
          console.log(sub.stream.connection.data, '서브정보오오⭐⭐⭐⭐');
          const user = JSON.parse(sub.stream.connection.data);
          const userid = user.clientdata;
          if (userid === dangchum.clientData) {
            setSomeone(sub);
          }
        });
      }
    }

    swal({
      className: 'countdown',
      timer: 3000,
      button: false,
      content: (
        <>
          {Lists !== undefined && (
            <>
              <div className="rolling">
                <div className="slider">
                  <div className="caption">
                    <p>행운의 주인공은?!</p>
                    <div className="text-box">
                      <div>{Lists[i]}</div>
                      <div>{Lists[(i + 1) % Lists.length]}</div>
                      <div>{Lists[(i + 2) % Lists.length]}</div>
                      <div>{Lists[(i + 3) % Lists.length]}</div>
                      <div>{Lists[(i + 4) % Lists.length]}</div>
                      <div>{Lists[(i + 5) % Lists.length]}</div>
                      <div>{Lists[(i + 6) % Lists.length]}</div>
                      <div>{Lists[(i + 7) % Lists.length]}</div>
                      <div>{Lists[(i + 8) % Lists.length]}</div>
                      <div>{randomPerson}</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ),
    });
    setTimeout(function () {
      swal({
        buttons: false,
        timer: 500,
        className: 'number',
        content: <div className="ment">행운의 당첨자가 곧 나타납니다!</div>,
      }); // 틀렸을 때 게임 다시하기위해 호출하는 함수
    }, 3500);
    setTimeout(function () {
      swal({
        buttons: false,
        timer: 500,
        className: 'number',
        content: <div className="number">3</div>,
      }); // 틀렸을 때 게임 다시하기위해 호출하는 함수
    }, 4500);
    setTimeout(function () {
      swal({
        buttons: false,
        timer: 500,
        className: 'number',
        content: <div className="number">2</div>,
      }); // 틀렸을 때 게임 다시하기위해 호출하는 함수
    }, 5500);
    setTimeout(function () {
      swal({
        buttons: false,
        timer: 500,
        className: 'number',
        content: <div className="number">1</div>,
      }); // 틀렸을 때 게임 다시하기위해 호출하는 함수
    }, 6500);
    setTimeout(function () {
      setUserScreen(true);
    }, 7500);
  });
  console.log(somone, '당첨자정보오~⭐⭐⭐⭐');
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
          {userscreen && (
            <UserVideoComponent streamManager={somone}></UserVideoComponent>
          )}
        </RandomChoiceSc>
      </MainGrid>
    </MainDiv>
  );
}
