// import React, { useState } from 'react';
// import {
//   HalfSideDiv2,
//   SmallBox,
//   SmallChattingInputBox,
// } from '../../Chatting/Chatting.style';
// import { useSelector, useDispatch } from 'react-redux';
// import { choQuiz } from '../../../../../../store/modules/meetingRoom';
// import SmallChatting from '../../Chatting/SmallChatting';
// import { useEffect } from 'react';
// import swal from 'sweetalert';

// function cho_hangul(str) {
//   const cho = [
//     'ㄱ',
//     'ㄲ',
//     'ㄴ',
//     'ㄷ',
//     'ㄸ',
//     'ㄹ',
//     'ㅁ',
//     'ㅂ',
//     'ㅃ',
//     'ㅅ',
//     'ㅆ',
//     'ㅇ',
//     'ㅈ',
//     'ㅉ',
//     'ㅊ',
//     'ㅋ',
//     'ㅌ',
//     'ㅍ',
//     'ㅎ',
//   ];
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     let code = str.charCodeAt(i) - 44032;
//     if (code > -1 && code < 11172) {
//       result += cho[Math.floor(code / 588)];
//     } else {
//       result += str.charAt(i);
//     }
//   }
//   return result;
// }

// export default function ConsonantStarInput() {
//   useEffect(() => {
//     // 대기화면 처음 들어오면 게임 설명 해주기
//     swal(
//       '🔔초성게임🔔',
//       '팬들에게 제출할 문제를 입력해주세요! 문제는 초성으로 자동 변경되어 제출됩니다. 게임시작 버튼을 눌리면 문제를 출제할 수 있습니다.',
//       {
//         closeOnClickOutside: false,
//         button: '확인',
//       }
//     );
//   }, []); // 초성버튼 누르면 게임 시작

//   return (
//     <>
//       <SmallChatting></SmallChatting>
//     </>
//   );
// }
