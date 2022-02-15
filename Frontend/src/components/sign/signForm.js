import React, { Component } from 'react';
import sign from '../../assets/images/sign.JPG';
import CanvasDraw from '.';
import styled from 'styled-components';
import { pointColor } from '../../styles/variables';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { setRecordImageAPI } from '../../store/apis/Main/meeting';
import { setSignButton } from '../../store/modules/meetingRoom';

const SignButton = styled.div`
  text-align: center;
  button {
    margin-top: 10px;
    background-color: ${pointColor};
    padding: 10px 20px;
    color: white;
    border-radius: 10px;
  }
`;

class signForm extends Component {
  //meetingid 가져오고 회원정보 가져와라
  state = {
    color: 'black',
    width: 500,
    height: 380,
    brushRadius: 5,
    lazyRadius: 12,
    backgroundImg: sign,
  };

  signClick = () => {
    var sessionId = this.props.storeSession.sessionId;
    var meetingId = sessionId.substring(0, sessionId.length - 9);
    console.log(this.props.onebyoneStream);
    var memberId = JSON.parse(
      this.props.onebyoneStream.stream.connection.data
    ).memberId;
    setRecordImageAPI({
      meetingId: meetingId,
      memberId: memberId,
      fileUrl: this.saveableCanvas.getDataURL(
        'jpg',
        this.state.backgroundImg,
        ''
      ),
    });
    this.props.storeSession.signal({
      data: '0',
      to: [],
      type: 'signoff',
    });
    this.props.doSetSignButton(false);
  };

  render() {
    return (
      <div>
        <CanvasDraw
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.color}
          brushRadius={this.state.brushRadius}
          lazyRadius={this.state.lazyRadius}
          canvasWidth={this.state.width}
          canvasHeight={this.state.height}
          imgSrc={this.state.backgroundImg}
        />
        <SignButton>
          <button
            onClick={() => {
              this.signClick();
              swal({
                text: '사인이 등록되었습니다.',
                button: false,
                timer: 2000,
                icon: 'info',
              });
            }}
          >
            완료
          </button>
        </SignButton>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  onebyoneStream: state.MeetingRoom.onebyoneStream,
  storeSession: state.MeetingRoom.storeSession,
});
const mapDispatchToProps = dispatch => {
  return {
    doSetSignButton: inputValue => dispatch(setSignButton(inputValue)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(signForm);
