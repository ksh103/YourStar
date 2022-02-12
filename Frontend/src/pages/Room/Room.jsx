import styled from 'styled-components';
import axios from 'axios';
import { OpenVidu } from 'openvidu-browser';
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import swal from 'sweetalert';

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
  AddQnaList,
  UserDelete,
  choQuiz,
  audioChange,
  UpdateOneByOneStream,
} from '../../store/modules/meetingRoom';
import { WarningToMemberAPI } from '../../store/apis/Main/meeting';
// 컴포넌트
import RoomComponent from './RoomComponent';
import { BASE_URL } from '../../utils/contants';

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
      recordId: null,
      choAnsUserCnt: 0, // 초성게임 맞춘 유저 수
    };
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.onbeforeunload);
    this.joinSession();
    console.log('내 정보 확인', this.state.me);
  }

  componentDidUpdate(prevState) {
    if (prevState.selectNum !== this.props.selectNum) {
      if (this.props.selectNum === 6) {
        if (this.state.me.code !== 3) {
          this.starJoinOnebyOne();
        }
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onbeforeunload);
  }

  onbeforeunload(event) {
    // this.leaveSession();
  }

  deleteSubscriber(streamManager) {
    let subscribers = this.props.subscribers;
    let index = subscribers.indexOf(streamManager, 0);
    if (index > -1) {
      subscribers.splice(index, 1);
      this.props.doDeleteSubscriber(subscribers);
    }
  }

  joinSession() {
    console.log('====== JOINSESSION ======');
    this.OV = new OpenVidu(); // Openvidu 객체 생성

    // 세션 진입
    this.setState(
      {
        session: this.OV.initSession(),
      },
      () => {
        var mySession = this.state.session;
        // 현재 미팅룸에 들어온 사용자 확인
        mySession.on('streamCreated', event => {
          var subscriber = mySession.subscribe(event.stream, undefined); // 들어온 사용자의 정보
          var subInfo = JSON.parse(subscriber.stream.connection.data);
          if (subInfo.memberInfo !== undefined) {
            console.log('===== 불러오기 성공 ======');
            this.props.doUpdateOneByOne(subscriber);
          } else {
            // 스타가 들어왔으면 메인 화면으로, 아니면 일반 화면으로 보냄
            if (subInfo.memberCode === 4) {
              this.props.doMainStreamManagerInfo(subscriber);
            } else if (subInfo.memberCode === 3) {
              console.log('=====사용자 입장=====');
              this.props.doUserUpdate(subscriber);
            }
          }
        });

        // 현재 미팅룸에서 퇴장한 사용자 확인
        mySession.on('streamDestroyed', event => {
          var check = mySession.sessionId.slice(-1);
          if (check !== 'e') {
            console.log('===== 누군가 퇴장 =====');
            this.deleteSubscriber(event.stream.streamManager);
          }
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
          // 일반 유저가 변화를 감지하는 부분          let changeNum = parseInt(event.data);
          let changeNum = parseInt(event.data);
          if (changeNum !== this.props.selectNum) {
            if (changeNum !== 6) {
              this.props.doScreenChange(changeNum);
              this.props.publisher.publishVideo(true);
            }
          }
        });

        mySession.on('signal:QnAmode', event => {
          let Modedata = event.data.split(',');
          const QAmode = Modedata[1];
          console.log(QAmode);
          if (QAmode !== this.props.QnAmode) {
            this.props.dochangeQnAMode(QAmode);
          }
        });

        mySession.on('signal:emozi', event => {
          let emozidata = event.data.split(',');
          if (emozidata[0] !== this.props.me.nick) {
            this.props.doemoziListAdd(emozidata[1]);
          }
        });
        mySession.on('signal:one', event => {
          // 일반 유저가 1대1 미팅 참여 요구받음
          let changeNum = parseInt(event.data);
          if (changeNum !== this.props.selectNum) {
            this.props.doScreenChange(changeNum);
            this.userJoinOnebyOne();
          }
        });

        mySession.on('signal:oneback', event => {
          // 일반 유저가 1대1 미팅 퇴장 요구 받음
          let changeNum = parseInt(event.data);
          if (changeNum !== this.props.selectNum) {
            if (this.state.me.code === 3) {
              this.props.doScreenChange(changeNum);
              mySession.disconnect();
              this.joinSession();
              this.stopRecording();
            }
          }
        });

        mySession.on('signal:starback', event => {
          // 스타가 1대1 미팅 퇴장 요구 받음
          let changeNum = parseInt(event.data);
          if (changeNum !== this.props.selectNum) {
            if (this.state.me.code === 4) {
              this.props.doScreenChange(changeNum);
              mySession.disconnect();
              var empty = [];
              this.props.doDeleteSubscriber(empty);
              this.joinSession();
            }
          }
        });

        mySession.on('signal:wait', event => {
          console.log('대기 순번 알림', event.data);
          swal({
            title: '1대1미팅 대기시간 알림',
            text: '약 ' + event.data + '분 뒤 입장 됩니다.',
          });
        });

        mySession.on('signal:UserQnA', event => {
          let QnAdata = event.data.split(',');
          if (QnAdata[0] !== this.props.me.nick) {
            const inputValue = {
              userName: QnAdata[0],
              text: QnAdata[1],
            };
            this.props.doAddQnaList(inputValue);
          }
        });

        if (this.props.userCode === 3) {
          mySession.on('signal:Cho', event => {
            let chodata = event.data.split(',');
            if (chodata[0] !== this.props.chosonantQuiz) {
              this.props.dochosonantQuiz(chodata[1], chodata[2]);
            }
          });
        }

        if (this.props.userCode === 4) {
          if (this.state.choAnsUserCnt < 4) {
            // 맞춘 유저 수가 3명보다 적다면
            mySession.on('signal:ChoUserAns', event => {
              // 세션 받와와서 처리해주기
              let chodata = event.data.split(',');
              console.log(
                '초성게임 정답자!!!!!!!!!!!!',
                this.state.choAnsUserCnt,
                '.',
                chodata[1]
              );
            });
            if (this.state.choAnsUserCnt === 3) {
              // 마지막 정답자라면
              // 게임 reset or 다시 하기
              // this.setState({ choAnsUserCnt: 0 }); // 만약 reset 시 게임이 choAnsUserCnt가 초기화가 안되면 맞춘 정답 user 수 초기화
            }
          }
        }
        mySession.on('signal:audio', event => {
          console.log('===== 오디오 상태 변경 =====');
          if (event.data === 'true') {
            this.props.publisher.publishAudio(true);
          } else {
            this.props.publisher.publishAudio(false);
          }
        });

        mySession.on('signal:video', event => {
          console.log('===== 비디오 상태 변경 =====');
          if (event.data === 'true') {
            this.props.publisher.publishVideo(true);
          } else {
            this.props.publisher.publishVideo(false);
          }
        });

        mySession.on('signal:warning', event => {
          console.log(event, '======경고정보수신======');
          console.log(this.props.me.memberId, '멤버아이디');
          console.log(this.state.session.sessionId, '세션아이디');
          // 경고주기
          this.props.doWarningToMemberAPI(
            this.props.me.memberId,
            this.state.session.sessionId
          );
          // 경고횟수 2회 이상이면 강퇴
          // this.state.session.forceDisconnect(event.data);
        });

        mySession.on('streamAudioVolumeChange', event => {
          console.log(
            event,
            '말하고있는쥬우우우우우우우우우우우우우우우우ㅜ우우우움ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ'
          );
          // Speaking(false);
        });

        // 여기에 스티커 신호 받아주면 됩니다.

        // 세션과 연결하는 부분
        this.getToken(this.state.mySessionId).then(token => {
          mySession
            .connect(token, {
              // 추가로 넘겨주고 싶은 데이터가 있으면 여기에 추가
              clientData: this.state.me.nick,
              memberCode: this.state.me.code,
            })
            .then(() => {
              // 연결 후에 내 정보를 담기
              let publisher;
              if (this.state.me.code === 3) {
                publisher = this.OV.initPublisher(undefined, {
                  audioSource: undefined, // The source of audio. If undefined default microphone
                  videoSource: undefined, // The source of video. If undefined default webcam
                  publishAudio: false, // Whether you want to start publishing with your audio unmuted or not
                  publishVideo: true, // Whether you want to start publishing with your video enabled or not
                  resolution: '640x480', // The resolution of your video
                  frameRate: 30, // The frame rate of your video
                  insertMode: 'APPEND', // How the video is inserted in the target element 'video-container'
                  mirror: false, // Whether to mirror your local video or not
                });
              } else {
                publisher = this.OV.initPublisher(undefined, {
                  audioSource: undefined, // The source of audio. If undefined default microphone
                  videoSource: undefined, // The source of video. If undefined default webcam
                  publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
                  publishVideo: true, // Whether you want to start publishing with your video enabled or not
                  resolution: '640x480', // The resolution of your video
                  frameRate: 30, // The frame rate of your video
                  insertMode: 'APPEND', // How the video is inserted in the target element 'video-container'
                  mirror: false, // Whether to mirror your local video or not
                });
              }

              // 세션에 내 비디오 및 마이크 정보 푸시
              mySession.publish(publisher);

              // 스토어로 저장을 해봐라.
              this.props.doSetMySession(mySession);

              // 내 화면 보이게 하기
              if (this.props.me.code === 4)
                this.props.doMainStreamManagerInfo(publisher);
              else this.props.doUpdateMyInformation(publisher); // 내 화면 보기 설정
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

  starJoinOnebyOne() {
    const mySession = this.state.session;
    mySession.disconnect();

    // 1대1 미팅룸으로 입장
    var onebyoneSessionId = this.state.mySessionId + '-onebyone';
    console.log('1대1 세션 입장 ', onebyoneSessionId);
    this.getToken(onebyoneSessionId).then(token => {
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
          this.props.doSetMySession(mySession);
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
  }

  userJoinOnebyOne() {
    const mySession = this.state.session;
    mySession.disconnect();

    // 세션과 연결을 끊고 Store에 다른 사람들의 비디오도 초기화 해줌
    var empty = [];
    this.props.doDeleteSubscriber(empty);

    // 1대1 미팅룸으로 입장
    var onebyoneSessionId = this.state.mySessionId + '-onebyone';
    console.log('1대1 세션 입장 ', onebyoneSessionId);
    this.createToken(onebyoneSessionId).then(token => {
      mySession
        .connect(token, {
          // 추가로 넘겨주고 싶은 데이터가 있으면 여기에 추가
          clientData: this.state.me.nick,
          memberCode: this.state.me.code,
          memberInfo: 'one',
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
          this.props.doSetMySession(mySession);
          this.props.doUpdateMyInformation(publisher);
        })
        .catch(error => {
          console.log(
            'There was an error connecting to the session:',
            error.code,
            error.message
          );
        });
    });

    // 녹화 시작
    var data = {
      session: onebyoneSessionId,
      name: mySession.sessionId + this.state.me.nick,
      hasAudio: true,
      hasVideo: true,
      outputMode: 'COMPOSED',
      resolution: '1280x720',
      frameRate: 25,
      shmSize: 536870912,
      ignoreFailedStreams: false,
    };
    axios
      .post(OPENVIDU_SERVER_URL + '/openvidu/api/recordings/start', data, {
        headers: {
          Authorization:
            'Basic ' + btoa('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET),
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log('===== 녹화 시작 =====', response);
        this.setState({
          recordId: response.data.id,
        });
      })
      .catch(error => console.error(error));
  }

  stopRecording() {
    axios
      .post(BASE_URL + 'meetings/recording', {
        meetingId: this.state.mySessionId,
        memberId: this.state.me.memberId,
        recordId: this.state.recordId,
      })
      .then(response => {
        console.log('===== 녹화 중지 =====', response);
      });
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
    return (
      <BackgroundDiv>
        {/* 컴포넌트는 들고왔을 때 잘 작동함 */}
        <div className="container">
          {this.state.session === undefined ? (
            <div>Loading</div>
          ) : (
            <div>
              <RoomComponent></RoomComponent>
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

  getToken(curSessionId) {
    console.log('===== 세션 연결 중 : ', curSessionId);
    return this.createSession(curSessionId).then(sessionId =>
      this.createToken(sessionId)
    );
  }

  createSession(curSessionId) {
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
  userCode: state.mypage.me.code,
  chosonantQuiz: state.MeetingRoom.chosonantQuiz,
  meetingId: state.meeting.meeting.id,
});

const mapDispatchToProps = dispatch => {
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
    doAddQnaList: QnAText => dispatch(AddQnaList(QnAText)),
    doDeleteSubscriber: subscribers => dispatch(UserDelete(subscribers)),
    dochosonantQuiz: (question, answer) => dispatch(choQuiz(question, answer)),
    doaudioChange: () => dispatch(audioChange()),
    doWarningToMemberAPI: (memberId, meetingId) =>
      dispatch(WarningToMemberAPI({ memberId, meetingId })),
    doUpdateOneByOne: stream => dispatch(UpdateOneByOneStream(stream)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
