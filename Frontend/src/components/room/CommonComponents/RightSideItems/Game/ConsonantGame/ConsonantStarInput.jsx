import React, { useState } from 'react';
import {
  HalfSideDiv2,
  SmallBox,
  SmallChattingInputBox,
} from '../../Chatting/Chatting.style';

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

export default function ConsonantStarInput() {
  const [starConsungInputValue, setstarConsungInputValue] = useState('');
  const [quiz, setquiz] = useState('');

  const changeStarInput = e => {
    setstarConsungInputValue(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    // console.log(e.target[0].value);
    setquiz(cho_hangul(e.target[0].value));
    setstarConsungInputValue('');
  };

  return (
    <>
      <HalfSideDiv2>
        <SmallBox>
          <p>스타 초성퀴즈 입력</p>
          <div style={{ color: 'black' }}>{quiz}</div>
        </SmallBox>

        <form onSubmit={onSubmitForm}>
          <SmallChattingInputBox
            type="text"
            value={starConsungInputValue}
            onChange={changeStarInput}
          />
        </form>
      </HalfSideDiv2>
    </>
  );
}
