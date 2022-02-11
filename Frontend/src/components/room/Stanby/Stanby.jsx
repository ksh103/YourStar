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
const StanbyJoin = (StanbySession, nick) => {
  var StanbySessionId = 'test' + `${nick}`;
  console.log('스탠바이 세션 입장 ', StanbySessionId);
  this.getToken(StanbySessionId).then(token => {
    StanbySession.connect(token, {
      // 추가로 넘겨주고 싶은 데이터가 있으면 여기에 추가
      clientData: this.state.me.nick,
      memberCode: this.state.me.code,
    })
      .then(() => {
        // 연결 후에 내 정보를 담기
        let publisher = this.OV.initPublisher(undefined, {
          audioSource: undefined, // The source of audio. If undefined default microphone
          videoSource: undefined, // The source of video. If undefined default webcam
          publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
          publishVideo: true, // Whether you want to start publishing with your video enabled or not
          resolution: '640x480', // The resolution of your video
          frameRate: 30, // The frame rate of your video
          insertMode: 'APPEND', // How the video is inserted in the target element 'video-container'
          mirror: false, // Whether to mirror your local video or not
        });

        // 세션에 내 비디오 및 마이크 정보 푸시
        StanbySession.publish(publisher);
        this.props.doSetMySession(StanbySession);
        this.props.doMainStreamManagerInfo(publisher);
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

  const mySession = this.state.session;

  if (mySession) {
    mySession.disconnect();
  }

  // Empty all properties...
  this.OV = null;
  this.setState({
    session: undefined,
  });
};

const getToken = curSessionId => {
  console.log('===== 세션 연결 중 : ', curSessionId);
  return this.createSession(curSessionId).then(sessionId =>
    this.createToken(sessionId)
  );
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
            window.location.assign(OPENVIDU_SERVER_URL + '/accept-certificate');
          }
        }
      });
  });
};

const createToken = sessionId => {
  return new Promise((resolve, reject) => {
    var data = {};
    if (this.state.me.code === 4) data.role = 'MODERATOR';
    else if (this.state.me.code === 2) data.role = 'SUBSCRIBER';
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
const OV = new OpenVidu();
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

  // storeSession.on('streamAudioVolumeChange', event => {
  //   // isSpeaking(false);
  // });

  const Speaking = isSpeaking => {
    console.log('스피킹중', isSpeaking);
    setIsSpeaking(isSpeaking);
    return isSpeaking;
  };

  const onClickEnter = () => {
    // 선택한 컬러 전역으로 저장하기
    dispatch(changeBackgroundColor(color));
    // history.push(`/room/${meeting.id}`);
    history.push(`/EunSeong`);
  };

  useEffect(() => {
    swal(
      '반갑습니다',
      '미팅 대기 페이지에서는 색상을 선택하여 원하는 배경색을 지정할 수 있습니다.',
      'success'
    );
  }, []);
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
      <StarScreen>
        {publisher && <UserVideoComponent streamManager={publisher} />}
      </StarScreen>
      <SettingWrapper>
        <SettingBox>
          {video === 0 ? (
            <BsFillCameraVideoOffFill
              style={{ cursor: 'pointer' }}
              onClick={() => {
                SetVideo(1);
              }}
            />
          ) : (
            <BsFillCameraVideoFill
              style={{ cursor: 'pointer' }}
              onClick={() => {
                SetVideo(0);
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
