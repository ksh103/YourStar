import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import LongChatting from '../../Chatting/LongChatting';
export default function ConsonantUserInput() {
  const [userConsungInputValue, setUserConsungInputValue] = useState('');

  const changeUserInput = e => {
    setUserConsungInputValue(e.target.value);
  };

  const { chosonantQuiz, storeSession } = useSelector(
    state => state.MeetingRoom
  );

  const { me } = useSelector(state => state.mypage);

  useEffect(() => {
    if (chosonantQuiz.length === 0) {
      // 초성게임에 문제가 없을 때 : 초기 상태일 때
      return;
    } else {
      swal('🔔스타가 내는 문제를 맞춰보세요🔔', chosonantQuiz[0], {
        closeOnClickOutside: false,
        content: 'input',
        button: '제출',
      }).then(answer => {
        if (answer === chosonantQuiz[1]) {
          swal(
            '축하합니다 정답입니다🎉',
            '정답 정보가 스타에게 제공됩니다',
            'success',
            {
              buttons: false,
              timer: 3000,
              closeOnClickOutside: false,
            }
          );
          storeSession.signal({
            data: `${me.nick},${me.memberId}`, // 정답 신호 보내주기
            type: 'ChoUserAns',
          });
        } else {
          swal('틀렸습니다', '다시한번 풀어보세요!', 'error', {
            buttons: false,
            timer: 2800,
            closeOnClickOutside: false,
          });
          setTimeout(function () {
            regame(); // 틀렸을 때 게임 다시하기위해 호출하는 함수
          }, 3000);
        }
      });
    }
  }, [chosonantQuiz, me.nick, me.memberId, storeSession]);

  const regame = () => {
    swal('🔔스타가 내는 문제를 맞춰보세요🔔', chosonantQuiz[0], {
      closeOnClickOutside: false,
      content: 'input',
      button: '제출',
    }).then(answer => {
      if (answer === chosonantQuiz[1]) {
        swal(
          '축하합니다 정답입니다🎉',
          '정답 정보가 스타에게 제공됩니다',
          'success',
          {
            buttons: false,
            timer: 3000,
            closeOnClickOutside: false,
          }
        );
        storeSession.signal({
          data: `${me.nick},${me.memberId}`, // 정답 신호 보내주기
          type: 'ChoUserAns',
        });
      } else {
        swal('틀렸습니다', '다시한번 풀어보세요!', 'error', {
          buttons: false,
          timer: 2800,
          closeOnClickOutside: false,
        });
        setTimeout(function () {
          regame(); // 틀렸을 때 게임 다시하기위해 호출하는 함수
        }, 3000);
      }
    });
  };

  return (
    <>
      <LongChatting></LongChatting>
    </>
  );
}
