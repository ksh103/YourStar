import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserVideo.css';
class OpenViduVideoComponent extends Component {
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

  render() {
    return (
      <video className={this.state.mode} autoPlay={true} ref={this.videoRef} />
    );
  }
}

const mapStateToProps = state => ({
  selectNum: state.MeetingRoom.selectNum,
  me: state.mypage.me,
});

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenViduVideoComponent);
