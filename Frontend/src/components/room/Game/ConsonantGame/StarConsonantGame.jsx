import React, { useEffect } from 'react';
import StarChosungScreen from '../../CommonComponents/MainItems/Game/StarChosungScreen';
import ScheduleListSelect from '../../CommonComponents/RightSideItems/Star/ScheduleListSelect';
import UserSelfCamRight from '../../CommonComponents/RightSideItems/User/UserSelfCamRight';
import GameButton from '../Button/ConsonantButton';
import { BackgroundDiv } from '../../styles/roomGlobal';
import SmallChatting from '../../CommonComponents/RightSideItems/Chatting/SmallChatting';
import swal from 'sweetalert';
// 포지션작업

export default function StarConsonantGame() {
  useEffect(() => {
    // 대기화면 처음 들어오면 게임 설명 해주기
    swal(
      '🔔초성게임🔔',
      '팬들에게 제출할 문제를 입력해주세요! 문제는 초성으로 자동 변경되어 제출됩니다. 게임시작 버튼을 눌리면 문제를 출제할 수 있습니다.',
      {
        closeOnClickOutside: false,
        button: '확인',
      }
    );
  }, []); // 초성버튼 누르면 게임 시작

  return (
    <BackgroundDiv>
      <StarChosungScreen></StarChosungScreen>
      <ScheduleListSelect></ScheduleListSelect> {/**여기에 랭킹순위 띄우기! */}
      <SmallChatting></SmallChatting>
      <UserSelfCamRight></UserSelfCamRight>
      <GameButton></GameButton> {/**게임 시작 종료 버튼 */}
    </BackgroundDiv>
  );
}
