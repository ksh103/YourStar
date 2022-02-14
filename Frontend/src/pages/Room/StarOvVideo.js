import React, { Component } from 'react';
import { connect } from 'react-redux';

class StarOpenViduVideoComponent extends Component {
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
    // 클래스명으로 붙여준다
    if (this.props.selectNum === 0) {
      this.setState({
        mode: 'StarAdmin',
      });
    } else if (this.props.selectNum === 1) {
      this.setState({
        mode: 'StarConcert',
      });
    } else if (this.props.selectNum === 2) {
      this.setState({
        mode: 'StarQnA',
      });
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
        mode: 'Admin',
      });
    }
  }

  render() {
    console.log(this.state.mode, '모드는 어떤모드일까요?! ☆☆☆☆☆☆☆☆☆');
    // 여기에 video가 비디오 사이즈를 조절해준다
    return (
      <video className={this.state.mode} autoPlay={true} ref={this.videoRef} />
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
)(StarOpenViduVideoComponent);
