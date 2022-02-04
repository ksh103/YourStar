import React, { Component } from 'react';
import styled from 'styled-components';
const OtherAngelStyle = styled.div`
  position: relative;
  margin: 1vw;
  width: 13vw;
  height: 19vh;
  background-color: gray;
  border-radius: 2vh;
`;

export default class OpenViduVideoComponent extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  getNicknameTag() {
    // Gets the nickName of the user
    return JSON.parse(this.props.streamManager.stream.connection.data)
      .clientData;
  }

  componentDidUpdate(props) {
    if (props && !!this.videoRef) {
      this.props.streamManager.addVideoElement(this.videoRef.current);
    }
  }

  componentDidMount() {
    if (this.props && !!this.videoRef) {
      this.props.streamManager.addVideoElement(this.videoRef.current);
    }
  }

  render() {
    // 여기에 video가 비디오 사이즈를 조절해준다
    return <video autoPlay={true} ref={this.videoRef} />;
  }
}
