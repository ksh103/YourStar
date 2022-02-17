import React, { Component } from 'react';
import './UserVideo.css';
import { UserDelete } from '../../store/modules/meetingRoom';
import { connect } from 'react-redux';
import ChoicedOpenViduVideoComponent from './ChoicedVideo';
import { WarningToMemberAPI } from '../../store/apis/Main/meeting';
import {
  BsFillMicFill,
  BsFillMicMuteFill,
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from 'react-icons/bs';
import { RiAlarmWarningLine } from 'react-icons/ri';

class ChoiceUserVideoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 마이크, 비디오
      audioState: false,
      videoState: true,
      isSpeaking: false,
    };
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
    this.props
      .doWarningToMemberAPI(
        // 경고 횟수 +1 db 저장
        userData.memberId,
        connection.session.sessionId
      )
      .then(event => {
        // 경고 2회 이상이면 퇴장
        this.props.storeSession.signal({
          // 해당 사용자에게 경고 신호주기
          data: event.data.applicant.applicantWarnCount, // 경고 횟수
          to: [connection],
          type: 'warning',
        });
        if (event.data.applicant.applicantWarnCount > 1) {
          this.props.storeSession.forceDisconnect(connection);
        }
      });
  }

  render() {
    return (
      <div className="UserChoiced">
        <div className={'hiddenConsole'}>
          {this.props.me.code !== 3 ? (
            <div className="son">
              <div style={{ fontSize: '2vw' }}>{this.getNicknameTag()}</div>
              <div>
                {this.state.audioState ? (
                  <BsFillMicFill
                    style={{ margin: '0.3vw' }}
                    size="30"
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
                    size="30"
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
                    size="30"
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
                    size="30"
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
                  size="30"
                  color="#00000"
                  onClick={() => {
                    this.warning(this.props.streamManager.stream.connection);
                  }}
                />
              </div>
            </div>
          ) : null}
          {this.props.streamManager !== undefined ? (
            <>
              <ChoicedOpenViduVideoComponent
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
  storeSession: state.MeetingRoom.storeSession,
  publisher: state.MeetingRoom.publisher,
  subscribers: state.MeetingRoom.subscribers,
  me: state.mypage.me,
  meetingId: state.meeting.meeting.id,
  selectNUm: state.MeetingRoom.selectNum,
});

const mapDispatchToProps = dispatch => {
  return {
    doUpdateSubscriber: subscribers => dispatch(UserDelete(subscribers)),
    doWarningToMemberAPI: (memberId, meetingId) =>
      WarningToMemberAPI({ memberId, meetingId }),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoiceUserVideoComponent);
