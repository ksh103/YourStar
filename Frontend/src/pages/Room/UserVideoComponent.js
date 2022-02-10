import React, { Component } from 'react';
import './UserVideo.css';
import {
  UserDelete,
} from '../../store/modules/meetingRoom';

import { connect } from 'react-redux';
import OpenViduVideoComponent from './OvVideo';
import { BsFillMicFill, BsFillMicMuteFill, BsFillCameraVideoFill, BsFillCameraVideoOffFill } from 'react-icons/bs';

class UserVideoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 마이크, 비디오, 화면공유 상태 
      audioState: false,
      videoState: true,
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
      remoteUsers.forEach((user) => {
          // 마이크 상태 변경하고 싶은 사용자라면 
          if (user.stream.connection.connectionId === connection.connectionId) {
              user.stream.audioActive = !user.stream.audioActive; // 마이크 상태 변경 
              console.log(user.stream.audioActive, '오디오상태변경즁!!!!!!!!!!')
              this.props.storeSession.signal({  // 해당 사용자에게 마이크 상태 변경하라고 신호보내기 
                data: user.stream.audioActive,
                to: [connection],
                type: "audio"
              })
          }
      });
      this.props.doUpdateSubscriber(remoteUsers);
  }

  // 강제 비디오 컨트롤
  forceVideoControll(connection) {
    let remoteUsers = this.props.subscribers;
      remoteUsers.forEach((user) => {
        // 비디오 상태 변경하고 싶은 사용자라면 
          if (user.stream.connection.connectionId === connection.connectionId) {
              user.stream.videoActive = !user.stream.videoActive;   // 비디오 상태 변경 

              this.props.storeSession.signal({ // 해당 사용자에게 비디오 상태 변경하라고 신호보내기 
                data: user.stream.videoActive,
                to: [connection],
                type: "video"
              })
          }
      });
      this.props.doUpdateSubscriber(remoteUsers);
  }

  audioChange() {
    if (this.state.audioState === true) {
      return (
        <BsFillMicFill
        size="24"
        color='#00000'
        onClick={() => {
          this.forceMicControll(this.props.streamManager.stream.connection);
          this.setState({
            audioState: !this.state.audioState
          })
        }}
      />
      )
  } else {
    return (
    <BsFillMicMuteFill
      size="24"
      color='#00000'
      onClick={() => {
        this.forceMicControll(this.props.streamManager.stream.connection);
        this.setState({
          audioState: !this.state.audioState
        })
      }}
      />)
  }
}


  render() {
    return (
      <div className="hiddenConsole">
        {this.props.me.code !== 3 ? <div className="son">
          <p>{this.getNicknameTag()}</p>
          <div>
            {this.state.audioState ? (
              <BsFillMicFill
                size="24"
                color='#00000'
                onClick={() => {
                  console.log("===== 오디오 클릭함 =====")
                  this.forceMicControll(this.props.streamManager.stream.connection);
                  this.setState({
                    audioState: !this.state.audioState
                  })
                }}
              />
            ) : (
              <BsFillMicMuteFill
                size="24"
                color='#00000'
                onClick={() => {
                  console.log("===== 오디오 클릭함 =====")
                  this.forceMicControll(this.props.streamManager.stream.connection);
                  this.setState({
                    audioState: !this.state.audioState
                  })
                }}
                />
              )}
              {this.state.videoState ? (
                <BsFillCameraVideoFill
                  size="24"
                  color='#00000'
                  onClick={() => {
                    this.forceVideoControll(this.props.streamManager.stream.connection);
                    this.setState({
                      videoState: !this.state.videoState
                    })
                  }}
                />
              ) : (
                <BsFillCameraVideoOffFill
                  size="24"
                  color='#00000'
                  onClick={() => {
                    this.forceVideoControll(this.props.streamManager.stream.connection);
                    this.setState({
                      videoState: !this.state.videoState
                  })
                  }}
                />
              )}
            </div>
          </div> : null} 
          {this.props.streamManager !== undefined ? (
          <>
            <OpenViduVideoComponent streamManager={this.props.streamManager} />
          </>
          ) : null}
        </div>
    );
  }
}
const mapStateToProps = state => ({
  storeSession: state.MeetingRoom.storeSession,
  publisher: state.MeetingRoom.publisher,
  subscribers: state.MeetingRoom.subscribers,
  me: state.mypage.me,
});

const mapDispatchToProps = dispatch => {
  return {
    doUpdateSubscriber: subscribers => dispatch(UserDelete(subscribers)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserVideoComponent);