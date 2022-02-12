import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';

//margin: 3.125vh 2vh;
const OtherAngelStyle = styled.div`
  // display: inline-flex;
  margin: 2vh 1.2vw;
  height: 15.628vh;
  width: 11.6666vw;
  background-color: gray;
  border-radius: 2vh;
`;

export default function OtherScreenAngle(props) {
  const { storeSession } = useSelector(state => state.MeetingRoom);
  const [qnaModalIsActive, setQnaModalIsActive] = useState(false);


  const sendQnaContents = () => {
    // let qnaContent;
    // if (qnaModalIsActive) {
    //   qnaContent = "";
    //   setQnaModalIsActive(true);
    // } else {
    //   qnaContent = props.text;
    //   setQnaModalIsActive(false);
    // }
    storeSession.signal({
      data: props.text,
      to: [],
      type: 'qnaContents',
    });
    swal({
      text: props.text,
      button: "close",
      // closeOnClickOutside: false,
    }).then(() => {
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
