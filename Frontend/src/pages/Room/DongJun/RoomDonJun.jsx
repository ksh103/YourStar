import React from 'react';
import styled from 'styled-components';
import MyScreen from '../../../components/room/CommonComponents/MainItems/MyScreen/MyScreen';
import MiddleChatting from '../../../components/room/CommonComponents/RightSideItems/Chatting/MiddleChatting';
import OXUserScreen from '../../../components/room/CommonComponents/MainItems/Game/OXUserScreen';
// 질문화면

// 포지션작업
const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2d8ff;
`;

const ChatDiv = styled.div`
  position: absolute;
  top: 4.5%;
  right: 8%;
`;

const MainDiv = styled.div`
  position: absolute;
  top: 4.5%;
  left: 8%;
`;

const MyScreenDiv = styled.div`
  position: absolute;
  top: 74%;
  left: 8%;
`;

const StickBarDiv = styled.div`
  position: absolute;
  top: 65.5%;
  left: 8%;
`;

const OtherPersonDiv = styled.div`
  position: absolute;
  top: 74%;
  right: 8%;
`;

const RandomMainDiv = styled.div`
  position: absolute;
  top: 4.5%;
  left: 8%;
`;

export default function RoomDonJun() {
  return (
    <BackgroundDiv>
      <MyScreen></MyScreen>
      <MiddleChatting></MiddleChatting>
      <OXUserScreen></OXUserScreen>
    </BackgroundDiv>
  );
}
