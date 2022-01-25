import React from 'react';
import {
  QuestionMain,
  QuestionDiv,
  QuestionMyScreen,
  QuestionOthersScreen,
} from './RoomDonJun.style';
import QuestionChat from './QuestionChat';
import styled from 'styled-components';
// 질문화면

// 여기서 position 작업

export default function RoomDonJun() {
  return (
    <div style={{ backgroundColor: '#e2d8ff' }}>
      {/* 채팅 영역 */}
      <QuestionChat></QuestionChat>
    </div>
  );
}
