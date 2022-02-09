import React from 'react';
import styled from 'styled-components';
import OtherScreenAngle from '../OtherScreen/OtherScreenAngle';
import { MainDiv } from '../Main.style';
import { useSelector, useDispatch } from 'react-redux';
import { changeQnAtoggle } from '../../../../../store/modules/meetingRoom';
// 포지션작업

const StarScreen = styled.div`
  overflow: auto;
  position: relative;
  width: 60.041vw;
  height: 66.5vh;
  background-color: white;
  border-radius: 3.0643vh;
  box-shadow: 0.306vh 0.306vh gray;
`;

const PerScPosition = styled.div`
  position: relative;
  top: 2%;
  left: 4%;
`;

export default function StarQnAListScreen() {
  const { StarQnAtoggle } = useSelector(state => ({
    StarQnAtoggle: state.MeetingRoom.StarQnAtoggle,
  }));

  const { QnAList } = useSelector(state => ({
    QnAList: state.MeetingRoom.QnAList,
  }));

  const dispatch = useDispatch();

  const toggleChange = tf => {
    dispatch(changeQnAtoggle(tf));
  };

  return (
    <MainDiv>
      <StarScreen>
        <button onClick={() => toggleChange(StarQnAtoggle)}>
          다시 작은화면
        </button>
        <PerScPosition>
          {QnAList.map((value, idx) => {
            console.log(value, 'qna리스트 벨류');
            return (
              <OtherScreenAngle key={idx + value.text}>
                {value}
              </OtherScreenAngle>
            );
          })}
        </PerScPosition>
      </StarScreen>
    </MainDiv>
  );
}
