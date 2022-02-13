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
    swal({
      title: '아래 내용의 포스트잇을 선택하시겠어요 ?',
      text: props.text,
      buttons: {
        cancel: '아니오',
        confirm: '네 !'
      }
    }).then(event =>{
      if (event === true) {
        storeSession.signal({ // 사용자에게 포스트잇 보여주기 (text 전달)
          data: props.text,
          to: [],
          type: 'qnaContents',
        });
        swal({ 
          text: props.text,
          button: "close",
        }).then(() => { // 스타가 모달 창 닫았을 경우 사용자에게도 닫으라는 신호 보내기 
          storeSession.signal({
            data: "",
            to: [],
            type: 'qnaContents',
          });
        })
      }
    })
  }

  return (
    <OtherAngelStyle onClick={() => {
      sendQnaContents();}}>
      {props.text}
    </OtherAngelStyle>
  );
};
