import React, { Component } from 'react';
import { connect } from 'react-redux';
class ChoicedOpenViduVideoComponent extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = {
      // 마이크, 비디오, 화면공유 상태
      mode: '',
    };
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
    console.log(
      this.props.selectNum,
      '여기가 유저에 대한 스크린 정보가 왔어요!'
    );
  }

  render() {
    console.log(this.props.choicde, '초이스드');
    // 여기에 video가 비디오 사이즈를 조절해준다

    return (
      <video className="UserChoiced" autoPlay={true} ref={this.videoRef} />
    );
  }
}

const mapStateToProps = state => ({
  selectNum: state.MeetingRoom.selectNum,
});

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoicedOpenViduVideoComponent);
