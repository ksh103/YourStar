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
  height: 60.5vh;
  background-color: white;
  border-radius: 3.0643vh;
  box-shadow: 0.306vh 0.306vh gray;
`;

const PerScPosition = styled.div`
  display: grid;
  // align-items: center;
  margin: 2%;
  grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(4, 100px);
  column-gap: 10px;
  row-gap: 10px;
  overflow: hidden;
`;

export default function StarQnAListScreen() {
  const { QnAList } = useSelector(state => state.MeetingRoom);

  return (
    <MainDiv>
      <StarScreen>
        <PerScPosition>
          {QnAList &&
            QnAList.map((value, idx) => {
              return (
                <OtherScreenAngle
                  key={idx + value.text}
                  text={value.text}
                ></OtherScreenAngle>
              );
            })}
        </PerScPosition>
      </StarScreen>
    </MainDiv>
  );
}
