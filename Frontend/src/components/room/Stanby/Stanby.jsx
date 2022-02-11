import React, { useState } from 'react';
import { StarScreen } from './Stanby.style';
import { BackgroundDiv } from '../styles/roomGlobal';
import {
  BsFillCircleFill,
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
  BsFillMicFill,
  BsFillMicMuteFill,
} from 'react-icons/bs';
import { IoExit } from 'react-icons/io5';
import {
  // StanbyBox,
  ColorCircleBox,
  ColorCircleWrapper,
  SettingWrapper,
  SettingBox,
  SettingIcons,
} from './Stanby.style';
import { roomColor } from '../../../styles/variables';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import swal from 'sweetalert';
import { changeBackgroundColor } from '../../../store/modules/meetingRoom';
import { OpenVidu } from 'openvidu-browser';
import UserVideoComponent from '../../../pages/Room/UserVideoComponent';
import axios from 'axios';

const ColorCircle = [
  roomColor.gray.background,
  roomColor.green.background,
  roomColor.blue.background,
  roomColor.pink.background,
  roomColor.red.background,
  roomColor.yellow.background,
  roomColor.purple.background,
];

const OPENVIDU_SERVER_URL = 'https://i6e204.p.ssafy.io:8443';
const OPENVIDU_SERVER_SECRET = 'YOURSTAR';

// 스탠바이룸 시작

export default function Stanby() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { me } = useSelector(state => state.mypage);
  const { meeting, storeSession } = useSelector(state => state.meeting);
  const [color, SetColor] = useState('#C4C4C4');
  const [video, SetVideo] = useState(0); // 1 ON, 0 OFF
  const [mic, SetMic] = useState(0); // 1 ON, 0 OFF
  const [isSpeaking, setIsSpeaking] = useState(false);
  const CircleOnclick = props => {
    SetColor(props);
  };
  const [pub, setPub] = useState('');
  // const [testSession, setTestSession] = useState(null);
  // 오픈비듀 생성
  const OV = new OpenVidu();
  // 세션생성
  const testSession = OV.initSession();

  const getToken = curSessionId => {
    console.log('===== 세션 연결 중 : ', curSessionId);
    return createSession(curSessionId).then(sessionId =>
      createToken(sessionId)
    );
  };

  const StanbyJoin = (StanbySession, nick) => {
    var StanbySessionId = nick + 'test';
    console.log('스탠바이 세션 입장 ', StanbySessionId);

    getToken(StanbySessionId).then(token => {
      StanbySession.connect(token, {
        // 추가로 넘겨주고 싶은 데이터가 있으면 여기에 추가
        // clientData: this.state.me.nick,
        // memberCode: this.state.me.code,
      })
        .then(() => {
          // 연결 후에 내 정보를 담기
          let publisher = OV.initPublisher(undefined, {
            audioSource: undefined, // The source of audio. If undefined default microphone
            videoSource: undefined, // The source of video. If undefined default webcam
            publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
            publishVideo: true, // Whether you want to start publishing with your video enabled or not
            resolution: '640x480', // The resolution of your video
            frameRate: 30, // The frame rate of your video
            insertMode: 'APPEND', // How the video is inserted in the target element 'video-container'
            mirror: false, // Whether to mirror your local video or not
          });
          // 할필요는 없는듯 지금 여기에 저장시겨주자
          // 세션에 내 비디오 및 마이크 정보 푸시
          StanbySession.publish(publisher);
          setPub(publisher);
          // this.props.doSetMySession(StanbySession);
          // this.props.doMainStreamManagerInfo(publisher);
        })
        .catch(error => {
          console.log(
            'There was an error connecting to the session:',
            error.code,
            error.message
          );
        });
    });
  };

  const leaveSession = () => {
    // --- 7) Leave the session by calling 'disconnect' method over the Session object ---

    const mySession = testSession;

    if (mySession) {
      mySession.disconnect();
    }

    // Empty all properties...
  };

  const createSession = curSessionId => {
    return new Promise((resolve, reject) => {
      var data = JSON.stringify({ customSessionId: curSessionId });
      axios
        .post(OPENVIDU_SERVER_URL + '/openvidu/api/sessions', data, {
          headers: {
            Authorization:
              'Basic ' + btoa('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET),
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          console.log('CREATE SESION', response);
          resolve(response.data.id);
        })
        .catch(response => {
          var error = Object.assign({}, response);
          if (error?.response?.status === 409) {
            resolve(curSessionId);
          } else {
            console.log(error);
            console.warn(
              'No connection to OpenVidu Server. This may be a certificate error at ' +
                OPENVIDU_SERVER_URL
            );
            if (
              window.confirm(
                'No connection to OpenVidu Server. This may be a certificate error at "' +
                  OPENVIDU_SERVER_URL +
                  '"\n\nClick OK to navigate and accept it. ' +
                  'If no certificate warning is shown, then check that your OpenVidu Server is up and running at "' +
                  OPENVIDU_SERVER_URL +
                  '"'
              )
            ) {
              window.location.assign(
                OPENVIDU_SERVER_URL + '/accept-certificate'
              );
            }
          }
        });
    });
  };

  const createToken = sessionId => {
    return new Promise((resolve, reject) => {
      var data = {};
      if (me.code === 4) data.role = 'MODERATOR';
      else if (me.code === 2) data.role = 'SUBSCRIBER';
      axios
        .post(
          OPENVIDU_SERVER_URL +
            '/openvidu/api/sessions/' +
            sessionId +
            '/connection',
          data,
          {
            headers: {
              Authorization:
                'Basic ' + btoa('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET),
              'Content-Type': 'application/json',
            },
          }
        )
        .then(response => {
          console.log('TOKEN', response);
          resolve(response.data.token);
        })
        .catch(error => reject(error));
    });
  };

  const Speaking = isSpeaking => {
    console.log('스피킹중', isSpeaking);
    setIsSpeaking(isSpeaking);
    console.log('test');
  };

  console.log(
    testSession,
    '테에에에에에스스스스스스ㅡ트트트트트트세세세세세세ㅔ셔셔셔셔셔셔션'
  );

  testSession.on('publisherStopSpeaking', event => {
    // 감지가 될 때 효과 줘버리깅
    Speaking(false);
  });

  testSession.on('publisherStartSpeaking', event => {
    Speaking(true);
  });

  const onClickEnter = () => {
    // 선택한 컬러 전역으로 저장하기
    testSession.disconnect();
    console.log(testSession, '============나갔습니다================');
    dispatch(changeBackgroundColor(color));
    history.push(`/room/${meeting.id}`);
    // history.push(`/room/:`);
  };

  useEffect(() => {
    swal(
      '반갑습니다',
      '미팅 대기 페이지에서는 색상을 선택하여 원하는 배경색을 지정할 수 있습니다.',
      'success'
    );
  }, []);

  useEffect(() => {
    // 마운트 될 때 세션정보와, 내 아이디를 보내준다.
    StanbyJoin(testSession, me.memberId);
  }, []);

  const videoControll = num => {
    SetVideo(num);
    if (pub.stream.videoActive === true) {
      pub.publishVideo(false);
    } else {
      pub.publishVideo(true);
    }
  };

  console.log(
    pub.stream.videoActive,
    '==========들어온사람의 비디오 상태 정보========='
  );
  return (
    <BackgroundDiv color={color}>
      <ColorCircleWrapper>
        <ColorCircleBox>
          {ColorCircle.map((colorCircle, index) => (
            <BsFillCircleFill
              key={index}
              onClick={() => {
                CircleOnclick(colorCircle);
              }}
              style={{
                color: colorCircle,
                marginLeft: '1vw',
                fontSize: '0.8vw',
                cursor: 'pointer',
              }}
            />
          ))}
        </ColorCircleBox>
      </ColorCircleWrapper>
      <StarScreen
        style={
          isSpeaking ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }
      >
        {pub && <UserVideoComponent streamManager={pub} />}
      </StarScreen>
      <SettingWrapper>
        <SettingBox>
          {video === 0 ? (
            <BsFillCameraVideoOffFill
              style={{ cursor: 'pointer' }}
              onClick={() => {
                videoControll(0);
              }}
            />
          ) : (
            <BsFillCameraVideoFill
              style={{ cursor: 'pointer' }}
              onClick={() => {
                videoControll(1);
              }}
            />
          )}
          <SettingIcons>
            {mic === 0 ? (
              <BsFillMicMuteFill
                onClick={() => {
                  SetMic(1);
                }}
              />
            ) : (
              <BsFillMicFill
                onClick={() => {
                  SetMic(0);
                }}
              />
            )}
          </SettingIcons>
          <SettingIcons>
            <IoExit onClick={onClickEnter} />
          </SettingIcons>
        </SettingBox>
      </SettingWrapper>
    </BackgroundDiv>
  );
}
