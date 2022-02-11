import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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
  const sendQnaContents = value => {
    storeSession.signal({
      data: value,
      to: [],
      type: 'qnaContents',
    });
  };
  return (
    <OtherAngelStyle onClick={() => sendQnaContents()}>
      {props.text}
    </OtherAngelStyle>
  );
}
