import React, { Component } from 'react';
import './UserVideo.css';
import StarOpenViduVideoComponent from './StarOvVideo';

export default class StarVideoComponent extends Component {
  //닉네임 반환
  getNicknameTag() {
    // Gets the nickName of the user
    return JSON.parse(this.props.streamManager.stream.connection.data)
      .clientData;
  }

  render() {
    console.log(this.props.streamManager, '매니텨');
    return (
      <div className="hiddenConsole">
        {/* <div className="son">
          <p>{this.getNicknameTag()}</p>
        </div> */}

        {this.props.streamManager !== undefined ? (
          // <div className="streamcomponent">
          <>
            <StarOpenViduVideoComponent
              // style={{ position: 'relative' }}
              streamManager={this.props.streamManager}
            />
          </>
        ) : null}
      </div>
    );
  }
}
