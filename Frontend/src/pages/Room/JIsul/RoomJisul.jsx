import styled from 'styled-components';
import axios from 'axios';
import { OpenVidu } from 'openvidu-browser';
import React, { Component } from 'react';
import './App.css';
import UserVideoComponent from './UserVideoComponent';
import { connect } from 'react-redux';
import { ChattingAction } from '../../../store/modules/meetingRoom';
import './test.css';
import { BsFillMicFill, BsFillMicMuteFill, BsFillCameraVideoFill, BsFillCameraVideoOffFill } from 'react-icons/bs';
import { MdScreenShare, MdStopScreenShare} from 'react-icons/md';

import sound from '../../../assets/images/MP_Tiny Button Push.mp3'
import UserModel from './models/user-model';
var localUser = new UserModel();

const OPENVIDU_SERVER_URL = 'https://i6e204.p.ssafy.io:8443';
const OPENVIDU_SERVER_SECRET = 'YOURSTAR';
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
  color: 'white';
`;

class RoomJisul extends Component {
  constructor(props) {
    super(props);
    // 현재 세션에서 사용될 state들을 정의함
    this.state = {
      mySessionId: 'SessionA',
      myUserName: 'Participant' + Math.floor(Math.random() * 100),
      session: undefined,
      mainStreamManager: undefined,
      publisher: undefined,
      subscribers: [],
      messages: [],
      testInputValue: '',
      // 기본 마이크, 비디오
      audioState: true,
      videoState: true,
      // 화면 공유 
      screenShareState: false,
    };
    // 여기는 컴포넌트 내부에서 쓰이는 내용들에대한 bind 처리
    // 새로운 message를 보낸다 or 세션참여 or 종료와같은 기능들을 정의해놓은곳
    this.joinSession = this.joinSession.bind(this);
    this.leaveSession = this.leaveSession.bind(this);
    this.handleChangeSessionId = this.handleChangeSessionId.bind(this);
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleMainVideoStream = this.handleMainVideoStream.bind(this);
    this.onbeforeunload = this.onbeforeunload.bind(this);
    this.sendmessageByClick = this.sendmessageByClick.bind(this);
    this.handleChatMessageChange = this.handleChatMessageChange.bind(this);
    this.sendmessageByEnter = this.sendmessageByEnter.bind(this);

    this.screenShare = this.screenShare.bind(this);
    this.stopScreenShare = this.stopScreenShare.bind(this);
  }

  // 효과음 
  play() { 
    var audio = document.getElementById('audio_play'); 
    if (audio.paused) { 
        audio.play(); 
    }else{ 
        audio.pause(); 
        audio.currentTime = 0 
    } 
  }

  handleChatMessageChange(e) {
    this.setState({
      testInputValue: e.target.value,
    });
  }

  sendmessageByEnter(e) {
    if (e.key === 'Enter') {
      const inputValue = {
        userName: this.state.myUserName,
        text: this.state.testInputValue,
        chatClass: 'messages__item--operator',
      };
      console.log(this.state.testInputValue, '입력값');
      this.props.doChattingAction(inputValue);
      const mySession = this.state.session;

      mySession.signal({
        data: `${this.state.myUserName},${this.state.testInputValue}`,
        to: [],
        type: 'chat',
      });

      this.setState({
        testInputValue: '',
      });
    }
  }
  // 게임 등수 + 싸인한 파일 --> 스토어
  sendmessageByClick() {
    console.log('클릭을 했어요!');

    const inputValue = {
      userName: this.state.myUserName,
      text: this.state.testInputValue,
      chatClass: 'messages__item--operator',
    };
    console.log(this.state.testInputValue, '입력값');
    this.props.doChattingAction(inputValue);

    const mySession = this.state.session;
    mySession.signal({
      data: `${this.state.myUserName},${this.state.testInputValue}`,
      to: [],
      type: 'chat',
    });

    this.setState({
      testInputValue: '',
    });
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.onbeforeunload);
    const { chattingList } = this.props;
    console.log(chattingList, '리스트');
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onbeforeunload);
  }

  onbeforeunload(event) {
    this.leaveSession();
  }

  handleChangeSessionId(e) {
    this.setState({
      mySessionId: e.target.value,
    });
  }

  handleChangeUserName(e) {
    this.setState({
      myUserName: e.target.value,
    });
  }

  handleMainVideoStream(stream) {
    if (this.state.mainStreamManager !== stream) {
      this.setState({
        mainStreamManager: stream,
      });
    }
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
    // --- 1) Get an OpenVidu object ---

    this.OV = new OpenVidu();

    // --- 2) Init a session ---

    this.setState(
      {
        session: this.OV.initSession(),
      },
      () => {
        var mySession = this.state.session;

        // --- 3) Specify the actions when events take place in the session ---

        // On every new Stream received...
        mySession.on('streamCreated', event => {
          // Subscribe to the Stream to receive it. Second parameter is undefined
          // so OpenVidu doesn't create an HTML video by its own
          var subscriber = mySession.subscribe(event.stream, undefined);
          console.log('----------------')
          console.log(event.stream)
          var subscribers = this.state.subscribers;
          subscribers.push(subscriber);

          // Update the state with the new subscribers
          this.setState({
            subscribers: subscribers,
          });
        });

        // On every Stream destroyed...
        mySession.on('streamDestroyed', event => {
          // Remove the stream from 'subscribers' array
          this.deleteSubscriber(event.stream.streamManager);
        });

        // On every asynchronous exception...
        mySession.on('exception', exception => {
          console.warn(exception);
        });

        mySession.on('signal:chat', event => {
          let chatdata = event.data.split(',');
          console.log(chatdata, '채팅데이터');
          if (chatdata[0] !== this.state.myUserName) {
            // this.setState({
            //   messages: [
            //     ...this.state.messages,
            //     {
            //       userName: chatdata[0],
            //       text: chatdata[1],
            //       chatClass: 'messages__item--visitor',
            //     },
            //   ],
            // });
            const inputValue = {
              userName: chatdata[0],
              text: chatdata[1],
              chatClass: 'messages__item--operator',
            };
            console.log(this.state.testInputValue, '세션온');
            this.props.doChattingAction(inputValue);
          }
        });
        // --- 4) Connect to the session with a valid user token ---

        // 'getToken' method is simulating what your server-side should do.
        // 'token' parameter should be retrieved and returned by your own backend
        this.getToken().then(token => {
          // First param is the token got from OpenVidu Server. Second param can be retrieved by every user on event
          // 'streamCreated' (property Stream.connection.data), and will be appended to DOM as the user's nickname
          mySession
            .connect(token, { clientData: this.state.myUserName })
            .then(() => {
              // --- 5) Get your own camera stream ---

              // Init a publisher passing undefined as targetElement (we don't want OpenVidu to insert a video
              // element: we will manage it on our own) and with the desired properties
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

              // --- 6) Publish your stream ---

              mySession.publish(publisher);

              // Set the main video in the page to display our webcam and store our Publisher
              this.setState({
                mainStreamManager: publisher,
                publisher: publisher,
                connectId: this.state.session.connection.connectionId,
              });
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
      subscribers: [],
      mySessionId: 'SessionA',
      myUserName: 'Participant' + Math.floor(Math.random() * 100),
      mainStreamManager: undefined,
      publisher: undefined,
    });
  }

  
  screenShare() {
    const videoSource = navigator.userAgent.indexOf('Firefox') !== -1 ? 'window' : 'screen';
    const publisher = this.OV.initPublisher(
      undefined,
        {
            videoSource: videoSource,
            publishAudio: true,
            publishVideo: true,
            mirror: false,
        },
        (error) => {
            if (error && error.name === 'SCREEN_EXTENSION_NOT_INSTALLED') {
                this.setState({ showExtensionDialog: true });
            } else if (error && error.name === 'SCREEN_SHARING_NOT_SUPPORTED') {
                alert('Your browser does not support screen sharing');
            } else if (error && error.name === 'SCREEN_EXTENSION_DISABLED') {
                alert('You need to enable screen sharing extension');
            } else if (error && error.name === 'SCREEN_CAPTURE_DENIED') {
                alert('You need to choose a window or application to share');
            }
        },
    );

    publisher.once('accessAllowed', () => {
        this.state.session.unpublish(this.state.publisher); // 송출하고 있는거 중단 (안하면 에러)
        // localUser.setStreamManager(publisher);
        this.state.session.publish(publisher).then(() => {  // 송출하기 
            // You can send a signal with Session.signal method to warn other participants
     
            // localUser.setScreenShareActive(true);
            // this.setState({
            //   screenSharestate: true,
            // });
            // this.state.session.signal(signalOptions);
            this.setState({ 
              publisher: publisher,
              screenShareState: true
            });
        });
    });
    // publisher.on('streamPlaying', () => {
    //     // this.updateLayout();
    //     publisher.videos[0].video.parentElement.classList.remove('custom-class');
    // });
}

stopScreenShare() {
    this.state.session.unpublish(this.state.publisher);
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

    // --- 6) Publish your stream ---

    this.state.session.publish(publisher);

    // Set the main video in the page to display our webcam and store our Publisher
    this.setState({
      publisher: publisher,
      screenShareState: false,
    });
    // this.connectWebCam();
  //   var publisher = this.OV.initPublisherAsync({
  //     videoSource: "screen"
  // }).then(publisher => {
  //     publisher.stream.getMediaStream().getVideoTracks()[0].addEventListener('ended', () => {
  //         console.log('User pressed the "Stop sharing" button');
  //     });
  //   });
}


  render() {
    const { chattingList } = this.props;
    const mySessionId = this.state.mySessionId;
    const myUserName = this.state.myUserName;
    return (
      <BackgroundDiv>
        {/* 컴포넌트는 들고왔을 때 잘 작동함 */}

        <div className="container test_obj">
          {this.state.session === undefined ? (
            <div id="join">
              <audio id='audio_play' src={sound}></audio> 
              <button className='btn-13' onClick={this.play}></button>
              <button className='btn-12'></button>
              <button className='btn-11'></button>
              <div id="img-div">
                <img
                  src="resources/images/openvidu_grey_bg_transp_cropped.png"
                  alt="OpenVidu logo"
                />
              </div>
              <div id="join-dialog" className="jumbotron vertical-center">
                <h1> Join a video session </h1>
                <form className="form-group" onSubmit={this.joinSession}>
                  <p>
                    <label>Participant: </label>
                    <input
                      className="form-control"
                      type="text"
                      id="userName"
                      value={myUserName}
                      onChange={this.handleChangeUserName}
                      required
                    />
                  </p>
                  <p>
                    <label> Session: </label>
                    <input
                      className="form-control"
                      type="text"
                      id="sessionId"
                      value={mySessionId}
                      onChange={this.handleChangeSessionId}
                      required
                    />
                  </p>
                  <p className="text-center">
                    <input
                      className="btn btn-lg btn-success"
                      name="commit"
                      type="submit"
                      value="JOIN"
                    />
                  </p>
                </form>
              </div>
            </div>
          ) : null}

          {this.state.session !== undefined ? (
            <div id="session">
              <div
                style={{
                  backgroundColor: 'black',
                  width: '500px',
                  height: '500px',
                  color: 'white',
                }}
              >
                <p>messages</p>

                {chattingList.map((value, idx) => {
                  return (
                    <div key={idx + value.text}>
                      <p>{value.text}</p>
                    </div>
                  );
                })}
              </div>
              <div id="session-header">
                <h1 id="session-title">{mySessionId}</h1>
                <h1>안녕하세요</h1>
                <input
                  type="text"
                  onChange={this.handleChatMessageChange}
                  value={this.state.testInputValue}
                  onKeyPress={this.sendmessageByEnter}
                />
                <p onClick={this.sendmessageByClick}>제출하기</p>

                <input
                  className="btn btn-large btn-danger"
                  type="button"
                  id="buttonLeaveSession"
                  onClick={this.leaveSession}
                  value="Leave session"
                />
              </div>
              {this.state.mainStreamManager !== undefined ? (
                <div id="main-video" className="col-md-6">
                  <UserVideoComponent
                    streamManager={this.state.mainStreamManager}
                  />
                </div>
              ) : null}
              <div id="video-container" className="col-md-6">
                {this.state.publisher !== undefined ? (
                  <div
                    className="stream-container col-md-6 col-xs-6"
                    onClick={() =>
                      this.handleMainVideoStream(this.state.publisher)
                    }
                  >
                    <UserVideoComponent streamManager={this.state.publisher} />
                  </div>
                ) : null}
                {this.state.subscribers.map((sub, i) => (
                  <div
                    key={i}
                    className="stream-container col-md-6 col-xs-6"
                    onClick={() => this.handleMainVideoStream(sub)}
                  >
                    <UserVideoComponent streamManager={sub} />
                  </div>
                ))}
              </div>
              <div>
              {/* <ToolbarComponent
                    sessionId={mySessionId}
                    user={localUser}
                    showNotification={this.state.messageReceived}
                    camStatusChanged={this.camStatusChanged}
                    micStatusChanged={this.micStatusChanged}
                    screenShare={this.screenShare}
                    stopScreenShare={this.stopScreenShare}
                    toggleFullscreen={this.toggleFullscreen}
                    switchCamera={this.switchCamera}
                    leaveSession={this.leaveSession}
                    toggleChat={this.toggleChat}
                /> */}
                </div>
                <div>
              {this.state.audioState ? (
                <BsFillMicFill
                  size="24"
                  color='#FFFFFF'
                  onClick={() => {
                    this.state.publisher.publishAudio(!this.state.audioState);
                    this.setState({ audioState: !this.state.audioState });
                  }}
                />
              ) : (
                <BsFillMicMuteFill
                  size="24"
                  color='#FFFFFF'
                  onClick={() => {
                    this.state.publisher.publishAudio(!this.state.audioState);
                    this.setState({ audioState: !this.state.audioState });
                  }}
                />
              )}
              {this.state.videoState ? (
                <BsFillCameraVideoFill
                  size="24"
                  color='#FFFFFF'
                  onClick={() => {
                    this.state.publisher.publishVideo(!this.state.videoState);
                    this.setState({ videoState: !this.state.videoState });
                  }}
                />
              ) : (
                <BsFillCameraVideoOffFill
                  size="24"
                  color='#FFFFFF'
                  onClick={() => {
                    this.state.publisher.publishVideo(!this.state.videoState);
                    this.setState({ videoState: !this.state.videoState });
                  }}
                />
              )}
               {this.state.screenShareState ? (
                <MdStopScreenShare
                  size="24"
                  color='#FFFFFF'
                  onClick={() => {
                    this.stopScreenShare();
                    this.setState({ screenShareState: !this.state.screenShareState });
                  }}
                />
              ) : (
                <MdScreenShare
                  size="24"
                  color='#FFFFFF'
                  onClick={() => {
                    this.screenShare();
                    this.setState({ screenShareState: !this.state.screenShareState });
                  }}
                />
              )}
            </div>
            </div>
          ) : null}
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
  chattingList: state.MeetingRoom.chattingList,
});

const mapDispatchToProps = dispatch => {
  return {
    // dispatch 가져오기
    doChattingAction: inputValue => dispatch(ChattingAction(inputValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomJisul);
