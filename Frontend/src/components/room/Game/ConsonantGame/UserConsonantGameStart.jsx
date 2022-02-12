import React, { useEffect } from 'react';
import styled from 'styled-components';
import swal from 'sweetalert';
import DefaultStarScreen from '../../CommonComponents/MainItems/DefaultStarScreen';
import MyScreen from '../../CommonComponents/MainItems/MyScreens/MyScreen';
import OtherPersonScreen from '../../CommonComponents/MainItems/OtherScreen/OtherPersonScreen';
import ConsonantAllRank from '../../CommonComponents/RightSideItems/Game/ConsonantGame/ConsonantAllRank';
import ConsonantUserInput from '../../CommonComponents/RightSideItems/Game/ConsonantGame/ConsonantUserInput';

// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

export default function UserConsonantGameStart() {
  useEffect(() => {
    swal(
      '🔔초성게임이 시작됩니다🔔',
      '선착순 3명!! 스타가 내는 문제를 맞춰보세요',
      {
        button: false,
        timer: 3000,
      }
    );
  }, []);

  return (
    <BackgroundDiv>
      <DefaultStarScreen></DefaultStarScreen>
      <ConsonantAllRank></ConsonantAllRank>
      <ConsonantUserInput></ConsonantUserInput>
      <MyScreen></MyScreen>
      <OtherPersonScreen></OtherPersonScreen>
    </BackgroundDiv>
  );
}
