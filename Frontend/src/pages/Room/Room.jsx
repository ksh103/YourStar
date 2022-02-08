import styled from 'styled-components';
import axios from 'axios';
import { OpenVidu } from 'openvidu-browser';
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

// action 호출
import {
  ChattingAction,
  UserUpdate,
  UpdateMyInformation,
  MainStreamManagerInfo,
  ScreenChange,
  ChattingInputChange,
  changeQnAMode,
  SetMySession,
  emoziListAdd,
} from '../../store/modules/meetingRoom';

// 컴포넌트
import RoomComponent from './RoomComponent';

const OPENVIDU_SERVER_URL = 'https://i6e204.p.ssafy.io:8443';
const OPENVIDU_SERVER_SECRET = 'YOURSTAR';
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
  color: 'white';
`;

class Room extends Component {
  constructor(props) {
    super(props);
    var pathname = props.location.pathname;

    this.state = {
      mySessionId: pathname.substr(6), // 넘어온 미팅룸 ID 입력
      session: undefined,
      me: this.props.me, // Store에 저장된 내 정보 입력
    };

    this.joinSession = this.joinSession.bind(this);
    this.leaveSession = this.leaveSession.bind(this);
    this.onbeforeunload = this.onbeforeunload.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.onbeforeunload);
    this.joinSession();
    console.log('내 정보 확인', this.state.me);
  }

  componentDidUpdate(prevState) {
    const QnAmode = this.props.QnAmode;
    const mySession = this.state.session;
    if (prevState.selectNum !== this.props.selectNum) {
      mySession.signal({
        data: this.props.selectNum,
        to: [],
        type: 'screen',
      });
    }

    // if (prevState.testInput !== this.props.testInput) {
    //   mySession.signal({
    //     data: `${this.props.me.nick},${this.props.testInput}`,
    //     to: [],
    //     type: 'chat',
    //   });
    // }

    if (prevState.QnAmode !== this.props.QnAmode) {
      mySession.signal({
        data: this.props.QnAmode,
        to: [],
        type: 'QnAmode',
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onbeforeunload);
  }

  onbeforeunload(event) {
    this.leaveSession();
  }

  deleteSubscriber(streamManager) {
    let subscribers = this.state.subscribers;
    let index = subscribers.indexOf(streamManager, 0);
    if (index > -1) {
      subscribers.splice(index, 1);
      this.setState({
        subscribers: subscribers,
      });
    }
  }

  joinSession() {
    this.OV = new OpenVidu(); // Openvidu 객체 생성
    this.setState(
      {
        session: this.OV.initSession(),
      },
      () => {
        var mySession = this.state.session;
        // 스토어로 저장을 해봐라.
        this.props.doSetMySession(mySession);
        // 현재 미팅룸에 들어온 사용자 확인
        mySession.on('streamCreated', event => {
          var subscriber = mySession.subscribe(event.stream, undefined); // 들어온 사용자의 정보
          var subInfo = JSON.parse(subscriber.stream.connection.data);

          // 스타가 들어왔으면 메인 화면으로, 아니면 일반 화면으로 보냄
          if (subInfo.memberCode === 4) {
            this.props.doMainStreamManagerInfo(subscriber);
          } else if (subInfo.memberCode === 3) {
            this.props.doUserUpdate(subscriber);
          }
        });

        // 현재 미팅룸에서 퇴장한 사용자 확인
        mySession.on('streamDestroyed', event => {
          // store에서도 제거해줘야함 !!!!! 아직 안함
          // Remove the stream from 'subscribers' array
          this.deleteSubscriber(event.stream.streamManager);
        });

        // Exception 처리
        mySession.on('exception', exception => {
          console.warn(exception);
        });

        // 현재 미팅룸 채팅 데이터 받는 부분
        mySession.on('signal:chat', event => {
          let chatdata = event.data.split(',');
          if (chatdata[0] !== this.props.me.nick) {
            const inputValue = {
              userName: chatdata[0],
              text: chatdata[1],
              chatClass: 'messages__item--operator',
            };
            this.props.doChattingAction(inputValue);
          }
        });

        //변화감지
        mySession.on('signal:screen', event => {
          // event.data ==> string 형태의 변화된 메뉴선택한 번호들!
          let changeNum = parseInt(event.data);

          if (changeNum !== this.props.selectNum) {
            this.props.doScreenChange(changeNum);
          }
        });

        mySession.on('signal:QnAmode', event => {
          console.log('qna모드 변경신호받음');
          const Mode = event.data;
          if (Mode !== this.props.QnAmode) {
            this.props.dochangeQnAMode(Mode);
          }
        });

        mySession.on('signal:emozi', event => {
          let emozidata = event.data.split(',');
          if (emozidata[0] !== this.props.me.nick) {
            this.props.doemoziListAdd(emozidata[1]);
          }
        });

        // 세션과 연결하는 부분
        this.getToken().then(token => {
          mySession
            .connect(token, {
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
              mySession.publish(publisher);

              this.props.doUpdateMyInformation(publisher); // 내 화면 보기 설정
            })
            .catch(error => {
              console.log(
                'There was an error connecting to the session:',
                error.code,
                error.message
              );
            });
        });
      }
    );
  }

  leaveSession() {
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
  }

  render() {
    const { publisher } = this.props;
    console.log('렌더링중!');
    return (
      <BackgroundDiv>
        {/* 컴포넌트는 들고왔을 때 잘 작동함 */}
        <div className="container">
          {this.state.session === undefined ? (
            <div>Loading</div>
          ) : (
            <div>
              {publisher !== undefined ? <RoomComponent></RoomComponent> : null}
            </div>
          )}
        </div>
      </BackgroundDiv>
    );
  }

  /**
   * --------------------------
   * SERVER-SIDE RESPONSIBILITY
   * --------------------------
   * These methods retrieve the mandatory user token from OpenVidu Server.
   * This behavior MUST BE IN YOUR SERVER-SIDE IN PRODUCTION (by using
   * the API REST, openvidu-java-client or openvidu-node-client):
   *   1) Initialize a Session in OpenVidu Server	(POST /openvidu/api/sessions)
   *   2) Create a Connection in OpenVidu Server (POST /openvidu/api/sessions/<SESSION_ID>/connection)
   *   3) The Connection.token must be consumed in Session.connect() method
   */

  getToken() {
    return this.createSession(this.state.mySessionId).then(sessionId =>
      this.createToken(sessionId)
    );
  }

  createSession(sessionId) {
    return new Promise((resolve, reject) => {
      var data = JSON.stringify({ customSessionId: sessionId });
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
            resolve(sessionId);
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
  }

  createToken(sessionId) {
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
  }
}

const mapStateToProps = state => ({
  // 채팅내용
  chattingList: state.MeetingRoom.chattingList,
  // 입장한 유저들 정보
  subscribers: state.MeetingRoom.subscribers,
  publisher: state.MeetingRoom.publisher,
  // 임시용 userid
  userId: state.MeetingRoom.userId,
  mainStreamManager: state.MeetingRoom.mainStreamManager,
  selectNum: state.MeetingRoom.selectNum,
  userNickName: state.MeetingRoom.userNickName,
  testInput: state.MeetingRoom.testInput,
  me: state.mypage.me,
  QnAmode: state.MeetingRoom.QnAmode,
});

const mapDispatchToProps = dispatch => {
  console.log(dispatch, '디스패치');
  return {
    doChattingAction: inputValue => dispatch(ChattingAction(inputValue)),
    doUserUpdate: subscriber => dispatch(UserUpdate(subscriber)),
    doUpdateMyInformation: publisher =>
      dispatch(UpdateMyInformation(publisher)),
    doMainStreamManagerInfo: mainStreamManager =>
      dispatch(MainStreamManagerInfo(mainStreamManager)),
    doScreenChange: selectNum => dispatch(ScreenChange(selectNum)),
    doChattingInputChange: testinput =>
      dispatch(ChattingInputChange(testinput)),
    dochangeQnAMode: QnAmode => dispatch(changeQnAMode(QnAmode)),
    doSetMySession: storeSession => dispatch(SetMySession(storeSession)),
    doemoziListAdd: emozi => dispatch(emoziListAdd(emozi)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
