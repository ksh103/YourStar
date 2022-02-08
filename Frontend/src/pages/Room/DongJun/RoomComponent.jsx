import React, { useState } from 'react';
import Concert from '../../../components/room/Concert/Concert';
import DefaultRoom from '../../../components/room/Admin/DefaultRoom';
import ConsonantGame from '../../../components/room/Game/ConsonantGame/ConsonantGame';
import OneonOneMeeting from '../../../components/room/OneonOneMeeting/1_1Meeting/OneonOneMeeting';
import QnA from '../../../components/room/QnA/QnA';
import Random from '../../../components/room/Random/Random';
import OXGame from '../../../components/room/Game/OXGame/OXGame';
import { useSelector } from 'react-redux';

export default function RoomEunSeong() {
  const { selectNum } = useSelector(state => ({
    selectNum: state.MeetingRoom.selectNum,
  }));
  switch (selectNum) {
    case 0:
      return <DefaultRoom />;
    case 1:
      return <Concert />;
    case 2:
      return <QnA />;
    case 3:
      return <Random />;
    case 4:
      return <OXGame />;
    case 5:
      return <ConsonantGame />;
    case 6:
      return <OneonOneMeeting />;
    default:
      return <DefaultRoom />;
  }
}
