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

class RoomDonJun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mySessionId: 'SessionA',
      myUserName: 'Participant' + Math.floor(Math.random() * 100),
      session: undefined,
      mainStreamManager: undefined,
      subscribers: [],
      messages: [],
      testInputValue: '',
    };

    this.joinSession = this.joinSession.bind(this);
    this.leaveSession = this.leaveSession.bind(this);
    this.handleChangeSessionId = this.handleChangeSessionId.bind(this);
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleMainVideoStream = this.handleMainVideoStream.bind(this);
    this.onbeforeunload = this.onbeforeunload.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.onbeforeunload);
    const { chattingList } = this.props;
    console.log(chattingList, '리스트');
  }

  componentDidUpdate(prevState) {
    const mySession = this.state.session;
    if (prevState.selectNum !== this.props.selectNum) {
      mySession.signal({
        data: this.props.selectNum,
        to: [],
        type: 'screen',
      });
    }

    if (prevState.chattingList !== this.props.chattingList) {
      mySession.signal({
        data: `${this.props.userNickName},${this.props.testInput}`,
        to: [],
        type: 'chat',
      });
    }
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
          // var subscribers = this.state.subscribers;

          this.props.doUserUpdate(subscriber);
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

          if (chatdata[0] !== this.props.userNickName) {
            const inputValue = {
              userName: chatdata[0],
              text: chatdata[1],
              chatClass: 'messages__item--operator',
            };
            // console.log(this.state.testInputValue, '세션온');
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
              // this.setState({
              //   mainStreamManager: publisher,
              //   publisher: publisher,
              // });
              this.props.doUpdateMyInformation(publisher);
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
      subscribers: [], // 다른 참여자들의 정보
      mySessionId: 'SessionA',
      myUserName: 'Participant' + Math.floor(Math.random() * 100),
      mainStreamManager: undefined, // 이게 스타로 바뀌어야하고
      publisher: undefined, // 이건 내 화면임
    });
  }

  render() {
    const { chattingList, subscribers, publisher, mainStreamManager } =
      this.props;
    const mySessionId = this.state.mySessionId;
    const myUserName = this.state.myUserName;

    // console.log(subscribers, '입장한유저들의정보');

    return (
      <BackgroundDiv>
        {/* 컴포넌트는 들고왔을 때 잘 작동함 */}

        <div className="container">
          {this.state.session === undefined ? (
            <div id="join">
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
    // 유저아이디 값 확인해서
    // 스타면
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomDonJun);
