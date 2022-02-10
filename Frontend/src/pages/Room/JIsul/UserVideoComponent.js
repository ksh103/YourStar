import React, { Component } from 'react';
import OpenViduVideoComponent from './OvVideo';
import './UserVideo.css';
import { connect } from 'react-redux';

import { BsFillMicFill, BsFillMicMuteFill, BsFillCameraVideoFill, BsFillCameraVideoOffFill } from 'react-icons/bs';

class UserVideoComponent extends Component {

    getNicknameTag() {
        // Gets the nickName of the user
        return JSON.parse(this.props.streamManager.stream.connection.data).clientData;
    }

    // 강제 마이크 컨트롤 
    forceMicControll(connection) {
        console.log(this.state.audioState);
        this.state.session.signal({
          data: connection.connectionId,
          to: [connection],
          type: "audio"
        })
      
        let remoteUsers = this.state.subscribers;
          console.log(remoteUsers);
          remoteUsers.forEach((user) => {
              if (user.stream.connection.connectionId === connection.connectionId) {
                  user.stream.audioActive = !user.stream.audioActive; 
              }
          });
          this.setState(
              {
                  subscribers: remoteUsers,
              }
          );
      }

      // 강제 비디오 컨트롤
      forceVideoControll(connection) {
        let remoteUsers = this.state.subscribers;
          console.log(remoteUsers);
          remoteUsers.forEach((user) => {
              if (user.stream.connection.connectionId === connection.connectionId) {
                  user.stream.videoActive = !user.stream.videoActive; 
      
                  this.state.session.signal({
                    data: user.stream.videoActive,
                    to: [connection],
                    type: "video"
                  })
              }
          });
          this.setState(
              {
                  subscribers: remoteUsers,
              }
          );
      }

      test(){
        this.props.storeSession.on('signal:audio', event => {
            console.log('audioaudioaudio', !this.state.audioState, '로 바꿔줘 !!!!!!!!!!1');
            this.props.publisher.publishAudio(!this.state.audioState);
            this.setState({ 
              audioState: !this.state.audioState
            });
          });
  
          this.props.storeSession.on('signal:video', event => {
              console.log('video', event.data, '로 바꿔줘 !!!!!!!!!!1');
              this.props.publisher.publishVideo(event.data);
              this.setState({ 
                videoState: event.data
              });
            });
      }
  
    render() {
        return (
            <div>
                {this.props.streamManager !== undefined ? (
                    <div className="streamcomponent">
                        <OpenViduVideoComponent streamManager={this.props.streamManager} />
                        <div><p>{this.getNicknameTag()}</p></div>
                        <div className='mic'>
                            {this.props.streamManager.stream.connection.stream.audioActive ? (
                                <BsFillMicFill
                                    size="24"
                                    color='#00000'
                                    onClick={() => {
                                    this.forceMicControll(this.props.streamManager.stream.connection);
                                    }}
                                />
                            ) : (
                                <BsFillMicMuteFill
                                    size="24"
                                    color='#00000'
                                    onClick={() => {
                                    this.forceMicControll(this.props.streamManager.stream.connection);
                                    }}
                                />
                            )}
                            {this.props.streamManager.stream.connection.stream.videoActive ? (
                                <BsFillCameraVideoFill
                                    size="24"
                                    color='#00000'
                                    onClick={() => {
                                    this.forceVideoControll(this.props.streamManager.stream.connection);
                                    }}
                                />
                            ) : (
                                <BsFillCameraVideoOffFill
                                    size="24"
                                    color='#00000'
                                    onClick={() => {
                                    this.forceVideoControll(this.props.streamManager.stream.connection);
                                    }}
                                />
                            )}
                      </div>
                    </div>
                ) : null}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    storeSession: state.MeetingRoom.storeSession,
    publisher: state.MeetingRoom.publisher,
    subscribers: state.MeetingRoom.subscribers,
  });
  
  const mapDispatchToProps = dispatch => {
    return {
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(UserVideoComponent);