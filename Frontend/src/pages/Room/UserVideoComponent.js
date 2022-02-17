import React, { Component } from 'react';
import './UserVideo.css';
import { UserDelete } from '../../store/modules/meetingRoom';
import { connect } from 'react-redux';
import { WarningToMemberAPI } from '../../store/apis/Main/meeting';
import swal from 'sweetalert';
import {
  BsFillMicFill,
  BsFillMicMuteFill,
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from 'react-icons/bs';
import { RiAlarmWarningLine } from 'react-icons/ri';
import OpenViduVideoComponent from './OvVideo';
class UserVideoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 마이크, 비디오
      audioState: false,
      videoState: true,
      isSpeaking: false,
      mode: '',
    };
  }

  componentDidMount() {
    if (this.props.selectNum === 0) {
      this.setState({
        mode: 'User',
      });
    } else if (this.props.selectNum === 1) {
      this.setState({
        mode: 'UserConcert',
      });
    } else if (this.props.selectNum === 2) {
      this.setState({
        mode: 'UserQnA',
      });
    } else if (this.props.selectNum === 3) {
      this.setState({
        mode: 'UserRandom',
      });
    } else if (this.props.selectNum === 4) {
      if (this.props.me.code === 4) {
        this.setState({
          mode: 'UserOXGameToStarScreen',
        });
      } else {
        this.setState({
          mode: 'UserOXGame',
        });
      }
    } else if (this.props.selectNum === 5) {
      console.log(this.props.me.code, this.props.me.nick, '가보고있슈');
      if (this.props.me.code === 4) {
        this.setState({
          mode: 'UserConsonantGameToStarScreen',
        });
      } else {
        this.setState({
          mode: 'UserConsonantGame',
        });
      }
    } else if (this.props.selectNum === 6) {
      this.setState({
        mode: 'UserOneOnOne',
      });
    } else if (this.props.selectNum === 7) {
      this.setState({
        mode: 'Ready',
      });
    } else {
      this.setState({
        mode: 'User',
      });
    }
  }

  getNicknameTag() {
    // Gets the nickName of the user
    return JSON.parse(this.props.streamManager.stream.connection.data)
      .clientData;
  }

  // 강제 마이크 컨트롤
  forceMicControll(connection) {
    let remoteUsers = this.props.subscribers;
    remoteUsers.forEach(user => {
      // 마이크 상태 변경하고 싶은 사용자라면
      if (user.stream.connection.connectionId === connection.connectionId) {
        user.stream.audioActive = !user.stream.audioActive; // 마이크 상태 변경

        this.props.storeSession.signal({
          // 해당 사용자에게 마이크 상태 변경하라고 신호보내기
          data: user.stream.audioActive,
          to: [connection],
          type: 'audio',
        });
      }
    });
    this.props.doUpdateSubscriber(remoteUsers);
  }

  // 강제 비디오 컨트롤
  forceVideoControll(connection) {
    let remoteUsers = this.props.subscribers;
    remoteUsers.forEach(user => {
      // 비디오 상태 변경하고 싶은 사용자라면
      if (user.stream.connection.connectionId === connection.connectionId) {
        user.stream.videoActive = !user.stream.videoActive; // 비디오 상태 변경

        this.props.storeSession.signal({
          // 해당 사용자에게 비디오 상태 변경하라고 신호보내기
          data: user.stream.videoActive,
          to: [connection],
          type: 'video',
        });
      }
    });
    this.props.doUpdateSubscriber(remoteUsers);
  }

  // 경고 주기
  warning(connection) {
    const userData = JSON.parse(connection.data);
    swal({
      text: '' + userData.clientData + '님에게 경고를 부여하시겠습니까?',
      icon: 'warning',
      buttons: {
        cancel: '아니오',
        confirm: '네',
      },
    }).then(event => {
      if (event === true) {
        this.props
          .doWarningToMemberAPI(
            // 경고 횟수 +1 db 저장
            userData.memberId,
            connection.session.sessionId
          )
          .then(event => {
            swal({
              text: userData.clientData + '님에게 경고 1회 부여했습니다.',
              icon: 'success',
              button: 'OK',
            }).then(() => {
              if (event.data.applicant.applicantWarnCount > 1) {
                // 경고 2회 이상이면 퇴장
                this.props.storeSession.forceDisconnect(connection);
                swal({
                  text:
                    userData.clientData +
                    '님은 누적 경고 2회 이상으로 퇴장 조치되었습니다.',
                  icon: 'info',
                  button: 'OK',
                });
              }
            });
            this.props.storeSession.signal({
              // 해당 사용자에게 경고 신호주기
              data: event.data.applicant.applicantWarnCount, // 경고 횟수
              to: [connection],
              type: 'warning',
            });
          });
      }
    });
  }

  render() {
    return (
      <div style={{ margin: '' }}>
        <div className={this.state.mode}>
          <div className="hiddenConsole">
            {this.props.me.code !== 3 ? (
              <div className="son">
                <div>{this.getNicknameTag()}</div>
                <div>
                  {this.state.audioState ? (
                    <BsFillMicFill
                      style={{ margin: '0.3vw' }}
                      size="24"
                      color="#00000"
                      onClick={() => {
                        this.forceMicControll(
                          this.props.streamManager.stream.connection
                        );
                        this.setState({
                          audioState: !this.state.audioState,
                        });
                      }}
                    />
                  ) : (
                    <BsFillMicMuteFill
                      style={{ margin: '0.3vw' }}
                      size="24"
                      color="#00000"
                      onClick={() => {
                        this.forceMicControll(
                          this.props.streamManager.stream.connection
                        );
                        this.setState({
                          audioState: !this.state.audioState,
                        });
                      }}
                    />
                  )}
                  {this.state.videoState ? (
                    <BsFillCameraVideoFill
                      style={{ margin: '0.3vw' }}
                      size="24"
                      color="#00000"
                      onClick={() => {
                        this.forceVideoControll(
                          this.props.streamManager.stream.connection
                        );
                        this.setState({
                          videoState: !this.state.videoState,
                        });
                      }}
                    />
                  ) : (
                    <BsFillCameraVideoOffFill
                      style={{ margin: '0.3vw' }}
                      size="24"
                      color="#00000"
                      onClick={() => {
                        this.forceVideoControll(
                          this.props.streamManager.stream.connection
                        );
                        this.setState({
                          videoState: !this.state.videoState,
                        });
                      }}
                    />
                  )}
                  <RiAlarmWarningLine
                    style={{ margin: '0.3vw' }}
                    size="24"
                    color="#00000"
                    onClick={() => {
                      this.warning(this.props.streamManager.stream.connection);
                    }}
                  />
                </div>
              </div>
            ) : null}
            {this.props.streamManager !== undefined ? (
              <OpenViduVideoComponent
                streamManager={this.props.streamManager}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  storeSession: state.MeetingRoom.storeSession,
  publisher: state.MeetingRoom.publisher,
  subscribers: state.MeetingRoom.subscribers,
  me: state.mypage.me,
  meetingId: state.meeting.meeting.id,
  selectNum: state.MeetingRoom.selectNum,
});

const mapDispatchToProps = dispatch => {
  return {
    doUpdateSubscriber: subscribers => dispatch(UserDelete(subscribers)),
    doWarningToMemberAPI: (memberId, meetingId) =>
      WarningToMemberAPI({ memberId, meetingId }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserVideoComponent);
