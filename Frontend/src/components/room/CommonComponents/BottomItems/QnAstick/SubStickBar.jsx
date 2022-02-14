import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeQnAMode,
  changeQnAtoggle,
} from '../../../../../store/modules/meetingRoom';
import swal from 'sweetalert';

// dispatch action 사용하기! 이때는 넘겨주는 값이 있어야합니다.
// useSelectot  -> state의 정보 받아오기
const StickBar = styled.div`
  width: 63vw;
  height: 5.517vh;
  background-color: white;
  border-radius: 1vh;
  box-shadow: 0.306vh 0.306vh gray;
`;

const StickBarDiv = styled.div`
  position: absolute;
  top: 66%;
  left: 8%;
`;

const GridDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  color: black;
  overflow: hidden;
`;

const InnerDiv = styled.div`
  grid-row: 1;
  height: 100%;
  border-radius: 0.5vh;
  cursor: pointer;
  background-color: ${props => props.clickColor};
  font-weight: ${props => (props.clickColor.length > 1 ? 'bold' : 'none')};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${props => props.hoverColor};
  }
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
    state => state.MeetingRoom.backgroundColor
  );

  const { storeSession } = useSelector(state => ({
    storeSession: state.MeetingRoom.storeSession,
  }));
  const dispatch = useDispatch();

  // 모드 변경
  const QnAChange = str => {
    if (str === 'list') {
      // 리스트면 화면 바뀌기
      dispatch(changeQnAtoggle(false));
    } else {
      if (str === 'start') {
        swal({
          text: '💌 팬분들이 궁금했던 것들이나 하고 싶었던 말을 받아볼까요 ?',
          buttons: {
            cancel: true,
            confirm: true,
          },
        }).then(event => {
          if (event === true) {
            storeSession.signal({
              // 사용자에게 시작 신호 보내기
              data: `${str}`,
              to: [],
              type: 'QnAmode',
            });
          }
        });
      } else {
        swal({
          text: '💌 포스트잇 받기를 중단할까요 ? \n (Q&A 시작 버튼을 통해 언제든 다시 포스트잇을 받을 수 있습니다.)',
          buttons: {
            cancel: true,
            confirm: true,
          },
        }).then(event => {
          if (event === true) {
            storeSession.signal({
              // 사용자에게 종료 신호 보내기
              data: `${str}`,
              to: [],
              type: 'QnAmode',
            });
          }
        });
      }
      dispatch(changeQnAtoggle(true)); // start나 stop으로 다시 돌아갈 수 있도록
    }
    dispatch(changeQnAMode(str)); // 모드 변경
  };

  return (
    <>
      <StickBarDiv>
        <StickBar>
          <GridDiv>
            {/* 여기를 스토어로 바꿔주기 */}
            <InnerDiv
              onClick={() => QnAChange('start')}
              clickColor={QnAmode === 'start' ? backgroundColor : ''}
              hoverColor={backgroundColor}
            >
              <div>Q&A 시작</div>
            </InnerDiv>
            <InnerDiv
              onClick={() => QnAChange('end')}
              clickColor={QnAmode === 'end' ? backgroundColor : ''}
              hoverColor={backgroundColor}
            >
              <div>Q&A 종료</div>
            </InnerDiv>
            <InnerDiv
              onClick={() => QnAChange('list')}
              clickColor={QnAmode === 'list' ? backgroundColor : ''}
              hoverColor={backgroundColor}
            >
              <div>Q&A 리스트</div>
            </InnerDiv>
          </GridDiv>
        </StickBar>
      </StickBarDiv>
    </>
  );
}
