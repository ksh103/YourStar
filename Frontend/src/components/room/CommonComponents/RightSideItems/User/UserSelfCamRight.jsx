import React from 'react';
import { ThridSideDiv3 } from '../Chatting/Chatting.style';
import { WaitingTimeWrapper } from '../../../OneonOneMeeting/Stanby/OneonOneStanby.style';
import { IMAGE_URL } from '../../../../../utils/contants';
import StarVideoComponent from '../../../../../pages/Room/StarVideoComponent';
import { useSelector } from 'react-redux';
export default function UserSelfCamRight() {
  const { mainStreamManager, meeting, isOneByOne } = useSelector(state => ({
    mainStreamManager: state.MeetingRoom.mainStreamManager,
    meeting: state.meeting,
  }));

  let FILE_ID = meeting.image;
  if (FILE_ID === undefined) FILE_ID = 49;

  let innerText = '1대1 미팅 대기중';
  if (!isOneByOne) innerText = '스타 기다리는 중..';
  return (
    <>
      <ThridSideDiv3>
        <WaitingTimeWrapper>
          {mainStreamManager !== undefined && !isOneByOne ? (
            <StarVideoComponent streamManager={mainStreamManager} />
          ) : (
            <div className="center">
              <div className="WaitText">{innerText}</div>
              <img
                src={`${IMAGE_URL}${FILE_ID}`}
                className="WaitImg"
                alt={FILE_ID}
              />
            </div>
          )}
        </WaitingTimeWrapper>
      </ThridSideDiv3>
    </>
  );
}
