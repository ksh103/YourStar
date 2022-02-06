import React, { useState } from 'react';
import Concert from '../../../components/room/Concert/Concert';
import styled from 'styled-components';
import Admin from '../../../components/room/Admin/Admin';
import StarQnA from '../../../components/room/QnA/StarQnA';
import StarRandom from '../../../components/room/Random/StarRandom';
import StarOXGame from '../../../components/room/Game/OXGame/StarOXGame';
import StarConsonantGame from '../../../components/room/Game/ConsonantGame/StarConsonantGame';
import OneonOneMeeting from '../../../components/room/OneonOneMeeting/1_1Meeting/OneonOneMeeting';
import { useSelector } from 'react-redux';

export default function RoomEunSeong() {
  const { selectNum } = useSelector(state => ({
    selectNum: state.MeetingRoom.selectNum,
  }));
  switch (selectNum) {
    case 0:
      return <Admin />;
    case 1:
      return <Concert />;
    case 2:
      return <StarQnA />;
    case 3:
      return <StarRandom />;
    case 4:
      return <StarOXGame />;
    case 5:
      return <StarConsonantGame />;
    case 6:
      return <OneonOneMeeting />;
    default:
      return <Admin />;
  }
}
