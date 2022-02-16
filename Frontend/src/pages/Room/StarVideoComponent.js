import React, { Component } from 'react';
import './UserVideo.css';
import StarOpenViduVideoComponent from './StarOvVideo';
import { OpenVidu } from 'openvidu-browser';
import { connect } from 'react-redux';
import { MainStreamManagerInfo } from '../../store/modules/meetingRoom';

import { MdScreenShare, MdStopScreenShare } from 'react-icons/md';
import {
  BsFillMicFill,
  BsFillMicMuteFill,
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from 'react-icons/bs';

class StarVideoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 마이크, 비디오, 화면공유 상태
      audioState: true,
      videoState: true,
      screenShareState: false,
      mode: '',
    };
    this.screenShare = this.screenShare.bind(this);
    this.stopScreenShare = this.stopScreenShare.bind(this);
  }
  componentDidMount() {
    if (this.props.selectNum === 0) {
      this.setState({
        mode: 'StarAdmin',
      });
    } else if (this.props.selectNum === 1) {
      this.setState({
        mode: 'StarConcert',
      });
    } else if (this.props.selectNum === 2) {
      if (this.props.me.code === 3) {
        this.setState({
          mode: 'StarQnAtoUser',
        });
      } else {
        this.setState({
          mode: 'StarQnA',
        });
      }
    } else if (this.props.selectNum === 3) {
      this.setState({
        mode: 'StarRandom',
      });
    } else if (this.props.selectNum === 4) {
      this.setState({
        mode: 'StarOXGame',
      });
    } else if (this.props.selectNum === 5) {
      this.setState({
        mode: 'StarConsonantGame',
      });
    } else if (this.props.selectNum === 6) {
      this.setState({
        mode: 'StarOneOnOne',
      });
    } else {
      this.setState({
        mode: 'StarAdmin',
      });
    }
  }
  //닉네임 반환
  // getNicknameTag() {
  //   // Gets the nickName of the user
  //   return JSON.parse(this.props.streamManager.stream.connection.data)
  //     .clientData;
  // }

  // 화면 공유 시작
  screenShare() {
    const videoSource =
      navigator.userAgent.indexOf('Firefox') !== -1 ? 'window' : 'screen';
    this.OV = new OpenVidu();
    // publisher 정보 담기
    const publisher = this.OV.initPublisher(
      undefined,
      {
        videoSource: videoSource,
        publishAudio: true,
        publishVideo: true,
        mirror: false,
      },
      error => {
        if (error && error.name === 'SCREEN_EXTENSION_NOT_INSTALLED') {
          this.setState({ showExtensionDialog: true });
        } else if (error && error.name === 'SCREEN_SHARING_NOT_SUPPORTED') {
          alert('Your browser does not support screen sharing');
        } else if (error && error.name === 'SCREEN_EXTENSION_DISABLED') {
          alert('You need to enable screen sharing extension');
        } else if (error && error.name === 'SCREEN_CAPTURE_DENIED') {
          alert('You need to choose a window or application to share');
        }
      }
    );

    publisher.once('accessAllowed', () => {
      this.props.storeSession.unpublish(this.props.mainStreamManager); // 송출하고 있는거 중단 (안하면 에러)
      this.props.storeSession.publish(publisher).then(() => {
        // 송출하기
        this.props.doMainStreamManagerInfo(publisher); // 스타 publisher 정보 바꾸기
        // state 변경
        this.setState({
          screenShareState: true,
        });
      });
    });
  }

  // 화면 공유 중지
  stopScreenShare() {
    this.props.storeSession.unpublish(this.props.mainStreamManager); // 화면 공유 중지
    this.OV = new OpenVidu();
    // publisher 설정
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

    this.props.storeSession.publish(publisher); // 캠 송출하기

    this.props.doMainStreamManagerInfo(publisher); // 스타 publisher 정보 바꾸기

    this.setState({
      audioState: true,
      videoState: true,
      screenShareState: false,
    });
  }

  render() {
    return (
      <div className={this.state.mode}>
        <div className="hiddenConsole">
          {this.props.me.code !== 3 ? (
            <div className="son">
              {/* 마이크 */}
              <div style={{ fontSize: '2vw'}}>내 화면</div>
              <div style={{ marginRight: '2vw'}}>
                {this.state.audioState ? (
                  <BsFillMicFill
                    style={{ margin: '0.5vw' }}
                    size="30"
                    color="#FFFFFF"
                    onClick={() => {
                      this.props.mainStreamManager.publishAudio(
                        !this.state.audioState
                      );
                      this.setState({ audioState: !this.state.audioState });
                    }}
                  />
                ) : (
                  <BsFillMicMuteFill
                    style={{ margin: '0.5vw' }}
                    size="30"
                    color="#FFFFFF"
                    onClick={() => {
                      this.props.mainStreamManager.publishAudio(
                        !this.state.audioState
                      );
                      this.setState({ audioState: !this.state.audioState });
                    }}
                  />
                )}
                {/* 비디오 */}
                {this.state.videoState ? (
                  <BsFillCameraVideoFill
                    style={{ margin: '0.5vw' }}
                    size="30"
                    color="#FFFFFF"
                    onClick={() => {
                      this.props.mainStreamManager.publishVideo(
                        !this.state.videoState
                      );
                      this.setState({ videoState: !this.state.videoState });
                    }}
                  />
                ) : (
                  <BsFillCameraVideoOffFill
                    style={{ margin: '0.5vw' }}
                    size="30"
                    color="#FFFFFF"
                    onClick={() => {
                      this.props.mainStreamManager.publishVideo(
                        !this.state.videoState
                      );
                      this.setState({ videoState: !this.state.videoState });
                    }}
                  />
                )}
                {/* 화면 공유 */}
                {this.state.screenShareState ? (
                  <MdStopScreenShare
                    style={{ margin: '0.5vw' }}
                    size="30"
                    color="#FFFFFF"
                    onClick={() => {
                      this.stopScreenShare();
                      this.setState({
                        screenShareState: !this.state.screenShareState,
                      });
                    }}
                  />
                ) : (
                  <MdScreenShare
                    style={{ margin: '0.5vw' }}
                    size="30"
                    color="#FFFFFF"
                    onClick={() => {
                      this.screenShare();
                      this.setState({
                        screenShareState: !this.state.screenShareState,
                      });
                    }}
                  />
                )}
              </div>
            </div>
          ) : null}

          {this.props.streamManager !== undefined ? (
            <>
              <StarOpenViduVideoComponent
                streamManager={this.props.streamManager}
              />
            </>
          ) : null}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  mainStreamManager: state.MeetingRoom.mainStreamManager,
  storeSession: state.MeetingRoom.storeSession,
  me: state.mypage.me,
  selectNum: state.MeetingRoom.selectNum,
});

const mapDispatchToProps = dispatch => {
  return {
    doMainStreamManagerInfo: mainStreamManager =>
      dispatch(MainStreamManagerInfo(mainStreamManager)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StarVideoComponent);
