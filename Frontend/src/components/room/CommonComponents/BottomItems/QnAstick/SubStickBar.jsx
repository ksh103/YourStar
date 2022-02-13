import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeQnAMode,
  changeQnAtoggle,
} from '../../../../../store/modules/meetingRoom';

// dispatch action 사용하기! 이때는 넘겨주는 값이 있어야합니다.
// useSelectot  -> state의 정보 받아오기
const StickBar = styled.div`
  width: 60.1416vw;
  height: 5.517vh;
  background-color: white;
  border-radius: 0.5vh;
  box-shadow: 0.306vh 0.306vh gray;
`;

const StickBarDiv = styled.div`
  position: absolute;
  top: 66.5%;
  left: 8%;
`;

const GridDiv = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  color: black;
  overflow: hidden;
`;

const InnerDiv = styled.li`
  grid-colum: 4;
  grid-row: 1;
  text-align: center;
  border-radius: 1vh;
  overflow:hidden;
  cursor: pointer;
  background-color: ${props => props.color};
  font-weight: ${props => (props.color.length > 1 ? 'bold' : 'none')};
`;

// 필요한 state
// 1. 유저 id 를 통한 구분
// 2. 모드변경에 따른 ui 구성 분기점 --> 분기점 만들었다!
// 3. 유저의 경우 입력창에 대한 정보처리 --> 리스트 형식으로의 입력, 유저정보에 따라 달라지게
// 4. 유저가 제출했을때의 상태 변경
export default function SubStickBar() {
  // qna가 시작되었는지 확인하기
  const { QnAmode } = useSelector(state => ({
    QnAmode: state.MeetingRoom.QnAmode,
  }));

  const { backgroundColor } = useSelector(
    state => state.MeetingRoom
  );

  const { storeSession } = useSelector(state => ({
    storeSession: state.MeetingRoom.storeSession,
  }));
  const dispatch = useDispatch();

  // 모드 변경
  const QnAChange = str => {
    if (str === 'list') { // 리스트면 화면 바뀌기 
      dispatch(changeQnAtoggle(false));
    } else {  // 시작 또는 중지 신호라면 사용자들에게 신호 보내기 
      storeSession.signal({
        data: `${str}`,
        to: [],
        type: 'QnAmode',
      });
      dispatch(changeQnAtoggle(true)) // start나 stop으로 다시 돌아갈 수 있도록 
    }
    dispatch(changeQnAMode(str));
  };

  return (
      <>
        <StickBarDiv>
          <StickBar>
            <GridDiv>
              {/* 여기를 스토어로 바꿔주기 */}
              <InnerDiv 
                onClick={() => QnAChange('start')} 
                color = {QnAmode === 'start'? backgroundColor : ''}
              ><p>Q&A 시작</p></InnerDiv>
              <InnerDiv 
                onClick={() => QnAChange('end')}
                color = {QnAmode === 'end'? backgroundColor : ''}
              ><p>Q&A 종료</p></InnerDiv>
              <InnerDiv 
                onClick={() => QnAChange('list')}
                color = {QnAmode === 'list'? backgroundColor : ''}
              ><p>Q&A 리스트</p></InnerDiv>
            </GridDiv>
          </StickBar>
        </StickBarDiv>
      </>
    );
  }