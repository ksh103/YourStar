import React from 'react';
import { ThridSideDiv3 } from '../Chatting/Chatting.style';
import { WaitingTimeWrapper } from '../../../OneonOneMeeting/Stanby/OneonOneStanby.style';
import StarVideoComponent from '../../../../../pages/Room/StarVideoComponent';
import { useSelector } from 'react-redux';
export default function UserSelfCamRight() {
  const { mainStreamManager, meeting, isOneByOne } = useSelector(state => ({
    mainStreamManager: state.MeetingRoom.mainStreamManager,
    meeting: state.meeting,
  }));

  let FILE_ID = meeting.image;
  if (FILE_ID === undefined) FILE_ID = 49;

  return (
    <>
      <ThridSideDiv3>
        <WaitingTimeWrapper>
          {mainStreamManager !== undefined && !isOneByOne ? (
            <StarVideoComponent streamManager={mainStreamManager} />
          ) : (
            <div className="center"></div>
          )}
        </WaitingTimeWrapper>
      </ThridSideDiv3>
    </>
  );
}
