import React, { useEffect, useState } from 'react';
import {
  HalfSideDiv2,
  SmallBox,
  SmallChattingInputBox,
  SmallChattingListBox,
} from '../../Chatting/Chatting.style';
import { useSelector } from 'react-redux';

export default function ConsonantUserInput() {
  const [userConsungInputValue, setUserConsungInputValue] = useState('');

  const changeUserInput = e => {
    setUserConsungInputValue(e.target.value);
  };

  const { chosonantQuiz, storeSession } = useSelector(
    state => state.MeetingRoom
  );
  useEffect(() => {
    if (chosonantQuiz === null) {
      return;
    }
    console.log('초성게임 주제제ㅔ젲제', chosonantQuiz);
  }, [chosonantQuiz]);

  const { me } = useSelector(state => state.mypage);

  const onSubmitForm = e => {
    e.preventDefault();
    const answer = e.target[0].value;
    if (answer === chosonantQuiz[1]) {
      alert('정답입니다!');
      storeSession.signal({
        data: `${me.nick},${me.memberId}`, // 정답 신호 보내주기
        type: 'ChoUserAns',
      });
      setUserConsungInputValue('');
    } else {
      alert('틀렸다 이자식아!');
    }
  };

  return (
    <>
      <HalfSideDiv2>
        <SmallBox>유저 입력창</SmallBox>
        <SmallChattingListBox>{chosonantQuiz[0]}</SmallChattingListBox>
        <form onSubmit={onSubmitForm}>
          <SmallChattingInputBox
            type="text"
            value={userConsungInputValue}
            onChange={changeUserInput}
          />
        </form>
      </HalfSideDiv2>
    </>
  );
}
