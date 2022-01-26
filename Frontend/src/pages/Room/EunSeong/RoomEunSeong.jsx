import React from 'react';
import OneonOneMeeting from '../../../components/room/OneonOneMeeting/1_1Meeting/OneonOneMeeting';
import OneonOneStanby from '../../../components/room/OneonOneMeeting/Stanby/OneonOneStanby';
import LongChatting from '../../../components/room/Chatting/LongChatting';
import SmallChating from '../../../components/room/Chatting/SmallChating';
import ConsonantMyRank from '../../../components/room/RightSideItems/Game/ConsonantGame/ConsonantMyRank';
import ConsonantStarInput from '../../../components/room/RightSideItems/Game/ConsonantGame/ConsonantStarInput';
import ConsonantUserInput from '../../../components/room/RightSideItems/Game/ConsonantGame/ConsonantUserInput';
import OXButtonStar from '../../../components/room/RightSideItems/Game/OXGame/OXButtonStar';
import ScheduleListSelect from '../../../components/room/RightSideItems/Star/ScheduleListSelect';
import MiddleChatting from '../../../components/room/Chatting/MiddleChatting';
export default function RoomEunSeong() {
  return (
    <div>
      {/* <OneonOneMeeting></OneonOneMeeting> */}
      {/* <OneonOneStanby></OneonOneStanby> */}
      {/* <LongChatting></LongChatting> */}
      {/* <SmallChating></SmallChating> */}
      {/* <ConsonantMyRank></ConsonantMyRank>
      <ConsonantUserInput></ConsonantUserInput> */}
      {/* <ScheduleListSelect></ScheduleListSelect>
      <OXButtonStar></OXButtonStar> */}
      <MiddleChatting></MiddleChatting>
    </div>
  );
}
