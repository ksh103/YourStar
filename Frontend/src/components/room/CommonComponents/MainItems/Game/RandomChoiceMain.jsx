import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { MainDiv } from '../Main.style';
import { useDispatch, useSelector } from 'react-redux';
import StarVideoComponent from '../../../../../pages/Room/StarVideoComponent';
// import './alertCss.css';
import ChoiceUserVideoComponent from '../../../../../pages/Room/ChoiceUserVideoComponent';
import swal from '@sweetalert/with-react';
import './rolling.scss';
import { randomResult } from '../../../../../store/modules/meetingRoom';
// 60vw 가로폭
const RandomChoiceSc = styled.div`
  position: relative;
  width: 31.2vw;
  height: 67.5vh;
  background-color: white;
  border-radius: 1vh;
  margin-right: 0.8vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainGrid = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
`;

const RandomIcon = styled.div`
  width: 100%;
  height: 100%;
  transition: all 2s linear;
  &:hover {
    /* transform: rotate(720deg); */
    transform: scale(1.2, 1.2);

    cursor: pointer;
  }
`;

const Img = styled.img`
  display: block;
  object-fit: cover;
  max-width: 100%;
  height: 67.5vh;
  border-radius: 1vh;
  /* max-height: 100%; */
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
  const [choiced, setChoiced] = useState(false);

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
    const ranparse = JSON.parse(ran);
    const nickoflucky = ranparse.clientData;

    storeSession.signal({
      data: `${ranList}/${ran}/${nickoflucky}`,
      to: [],
      type: 'randomresult',
    });
    console.log(nickoflucky, '당첨자 닉네임');
    randomoneperson(nickoflucky);
    setSomeone(randomresult);
  };

  storeSession.on('signal:randomresult', event => {
    const arr = event.data.split('/');
    const dangchum = JSON.parse(arr[1]);
    const Lists = JSON.parse(arr[0]);
    const luckyUser = arr[2];
    randomoneperson(luckyUser);
    if (me.code === 3) {
      if (me.nick === dangchum.clientData) {
        setSomeone(publisher);
        setChoiced(true);
      } else {
        subscribers.map((sub, idx) => {
          const user = JSON.parse(sub.stream.connection.data);
          const userid = user.clientData;
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
                      <div>{luckyUser}</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ),
    }).then(() => {
      swal({
        buttons: false,
        timer: 2000,
        className: 'number',
        content: <div className="ment">행운의 당첨자가 곧 나타납니다!</div>,
      }).then(() => {
        swal({
          buttons: false,
          timer: 1000,
          className: 'number',
          content: <div className="number">3</div>,
        }).then(() => {
          swal({
            buttons: false,
            timer: 1000,
            className: 'number',
            content: <div className="number">2</div>,
          }).then(() => {
            swal({
              buttons: false,
              timer: 1000,
              className: 'number',
              content: <div className="number">1</div>,
            }).then(() => {
              setUserScreen(true);
            });
          }); // 틀렸을 때 게임 다시하기위해 호출하는 함수
        }); // 틀렸을 때 게임 다시하기위해 호출하는 함수}); // 틀렸을 때 게임 다시하기위해 호출하는 함수
      });
    });
    setTimeout(function () {
      setUserScreen(false);
    }, 30000);
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
          {me.code === 4 && !userscreen ? (
            <div>
              <div
                style={{
                  textAlign: 'center',
                  paddingBottom: '3vw',
                  fontSize: '1.5vw',
                }}
              >
                🎯룰렛을 클릭하여 당첨자를 뽑아주세요🎯
              </div>
              <div style={{ textAlign: 'center' }}>
                <RandomIcon>
                  <img
                    style={{ width: '18vw' }}
                    src="https://images-ext-2.discordapp.net/external/scYd434SR4jsge3NpuRlGVKBKj1jUGXm9RYkGHa3iJE/https/u01.appmifile.com/images/2019/09/10/b3788a8e-24d2-41b3-91c4-131968dab219.gif"
                    alt="none"
                    onClick={onShuffle}
                  />
                </RandomIcon>
              </div>
            </div>
          ) : null}
          {/* 유저 정보가 들어오면 띄워주기 */}
          {!userscreen && me.code === 3 ? (
            // <Img src="http://www.dailytab.co.kr/design/dailytab/m/img/banner/200211random.gif"/>
            <Img src="https://images.all-free-download.com/images/graphiclarge/gorgeous_curtain_of_red_03_vector_181953.jpg" />
          ) : null}
          {userscreen ? (
            <ChoiceUserVideoComponent
              streamManager={somone}
            ></ChoiceUserVideoComponent>
          ) : null}
        </RandomChoiceSc>
      </MainGrid>
    </MainDiv>
  );
}
