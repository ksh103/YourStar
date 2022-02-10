import React, { Component } from 'react';
import OpenViduVideoComponent from './OvVideo';
import './UserVideo.css';

export default class UserVideoComponent extends Component {
  getNicknameTag() {
    // Gets the nickName of the user
    return JSON.parse(this.props.streamManager.stream.connection.data)
      .clientData;
  }

  render() {
    return (
      <div className="hiddenConsole">
        <div className="son">
          <p>{this.getNicknameTag()}</p>
        </div>

        {this.props.streamManager !== undefined ? (
          <>
            <OpenViduVideoComponent streamManager={this.props.streamManager} />
          </>
        ) : null}
      </div>
    );
  }
}
