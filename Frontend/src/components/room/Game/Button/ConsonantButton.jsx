import { CircularProgress } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import swal from 'sweetalert';
import { CallGameRankAPI } from '../../../../store/apis/Room/game';
import { ScreenChange } from '../../../../store/modules/meetingRoom';

const StartButtonDiv = styled.div`
  position: absolute;
  top: 86vh;
  left: 51vw;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 1vh;
  padding: 10px;
  border: 2px solid ${props => props.color};
  &:active {
    -webkit-transform: scale(0.9, 0.9);
    -moz-transform: scale(0.9, 0.9);
    -ms-transform: scale(0.9, 0.9);
    -o-transform: scale(0.9, 0.9);
    transform: scale(0.9, 0.9);
  }
  &:hover {
    background-color: ${props => props.color};
  }
`;
const EndButtonDiv = styled.div`
  position: absolute;
  top: 86vh;
  left: 61vw;
  background-color: #f5f5f5;
  border-radius: 1vh;
  padding: 10px;
  border: 2px solid ${props => props.color};
  &:active {
    -webkit-transform: scale(0.9, 0.9);
    -moz-transform: scale(0.9, 0.9);
    -ms-transform: scale(0.9, 0.9);
    -o-transform: scale(0.9, 0.9);
    transform: scale(0.9, 0.9);
  }
  &:hover {
    background-color: ${props => props.color};
  }
`;
const TestDiv = styled.div``;

function cho_hangul(str) {
  const cho = [
    'ㄱ',
    'ㄲ',
    'ㄴ',
    'ㄷ',
    'ㄸ',
    'ㄹ',
    'ㅁ',
    'ㅂ',
    'ㅃ',
    'ㅅ',
    'ㅆ',
    'ㅇ',
    'ㅈ',
    'ㅉ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ',
  ];
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i) - 44032;
    if (code > -1 && code < 11172) {
      result += cho[Math.floor(code / 588)];
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}

export default function GameButton() {
  const dispatch = useDispatch();
  const { storeSession, backgroundColor } = useSelector(state => ({
    storeSession: state.MeetingRoom.storeSession,
    backgroundColor: state.MeetingRoom.backgroundColor,
  }));
  console.log(storeSession);
  const { meeting } = useSelector(state => state.meeting);
  const { me } = useSelector(state => state.mypage);

  const onStartButton = () => {
    swal(
      '🔔초성게임🔔',
      '팬들에게 제출할 문제를 입력해주세요! \n 문제는 초성으로 자동 변경되어 제출됩니다.',
      {
        closeOnClickOutside: false,
        content: 'input',
        button: '제출',
      }
    ).then(answer => {
      const problem = cho_hangul(answer);
      storeSession.signal({
        data: `${me.nick},${problem},${answer}`, // 정답 신호 보내주기
        type: 'Cho',
      });
      swal(
        '문제가 출제되었습니다.',
        '선착순으로 정답을 맞춘 3명의 정보가 나타납니다.',
        'success'
      );
    });
  };

  const onEndButton = e => {
    // 게임 등수 먼저 알려주기!
    storeSession.signal({
      // 종료 버튼 클릭
      data: '0',
      to: [],
      type: 'endCho',
    });
  };

  return (
    <>
      <StartButtonDiv color={backgroundColor}>
        <button style={{ fontSize: '1.4vw' }} onClick={onStartButton}>
          게임 시작
        </button>
      </StartButtonDiv>
      <EndButtonDiv color={backgroundColor}>
        <button style={{ fontSize: '1.4vw' }} onClick={onEndButton}>
          게임 종료
        </button>
      </EndButtonDiv>
    </>
  );
}
