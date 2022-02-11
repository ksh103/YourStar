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
  const { StarQnAtoggle, QnAList, storeSession } = useSelector(
    state => state.MeetingRoom
  );

  const dispatch = useDispatch();

  const toggleChange = tf => {
    dispatch(changeQnAtoggle(tf));
  };

  // 클릭을 했을 때,
  // 다른 모든 사용자게에, 클릭 한 영역의 내용이 전달되게 해주기
  // 모달창에 띄워주기!

  // 시그널 여기서
  const sendQnaContents = value => {
    storeSession.signal({
      data: value,
      to: [],
      type: 'qnaContents',
    });
  };

  return (
    <MainDiv>
      <StarScreen>
        <button onClick={() => toggleChange(StarQnAtoggle)}>
          다시 작은화면
        </button>
        <PerScPosition>
          {QnAList &&
            QnAList.map((value, idx) => {
              console.log(value, 'qna리스트 벨류');
              return (
                <div onClick={sendQnaContents(value)}>
                  <OtherScreenAngle key={idx + value.text}>
                    {value}
                  </OtherScreenAngle>
                </div>
              );
            })}
        </PerScPosition>
      </StarScreen>
    </MainDiv>
  );
}
