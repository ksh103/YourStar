import React, { Component } from 'react';
import styled from 'styled-components';
import OpenViduVideoComponent from './OvVideo';
import './UserVideo.css';

// const Wrapper = styled.div`
//   position: relative;
//   margin: 2vh 1.2vw;
//   height: 15.628vh;
//   width: 11.6666vw;
//   background-color: gray;
//   border-radius: 2vh;
// `;

export default class UserVideoComponent extends Component {
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
        <div className="son">
          <p>{this.getNicknameTag()}</p>
        </div>

        {this.props.streamManager !== undefined ? (
          // <div className="streamcomponent">
          <>
            <OpenViduVideoComponent
              style={{ position: 'relative' }}
              streamManager={this.props.streamManager}
            />
          </>
        ) : null}
      </div>
    );
  }
}
