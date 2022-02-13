import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';

//margin: 3.125vh 2vh;
const OtherAngelStyle = styled.div`
 box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
 text-align : center;
 padding: 10% 5% 5% 5%;
 overflow: hidden;
 background-color: #F9F8B9;
 cursor: pointer;
`;

export default function OtherScreenAngle(props) {
  const { storeSession } = useSelector(state => state.MeetingRoom);

  const sendQnaContents = () => {
    storeSession.signal({ // qna 모달창 여는 신호 보내기(text 전달)
      data: props.text,
      to: [],
      type: 'qnaContents',
    });
    swal({  // 스타쪽 모달창 열기 
      text: props.text,
      button: "close",
    }).then(() => { // 스타가 모달 창 닫았을 경우 사용자에게도 닫으라는 신호 보내기 
      storeSession.signal({
        data: "",
        to: [],
        type: 'qnaContents',
      });
  })
  };

  return (
    <OtherAngelStyle onClick={() => {
      sendQnaContents();}}>
      {props.text}
    </OtherAngelStyle>
  );
}
