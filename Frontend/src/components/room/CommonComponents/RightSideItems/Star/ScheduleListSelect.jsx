import React, { useEffect } from 'react';
import {
  HalfSideDiv1,
  SmallBoxSelectSchedule,
} from '../Chatting/Chatting.style';
import { useSelector, useDispatch } from 'react-redux';
import {
  ResetIndex,
  ScreenChange,
} from '../../../../../store/modules/meetingRoom';
import {
  ScheduleListBox,
  ScheduleListWrapper,
} from './ScheduleListSelect.style';
import { blockColor } from '../../../../../styles/variables';
import swal from 'sweetalert';
import { useHistory, useParams } from 'react-router';
import { END_MEETING_REQUEST } from '../../../../../store/modules/meeting';
import axios from 'axios';

const List = [
  '⭐ 대기화면',
  '🎤 공연모드',
  '📝 QnA모드',
  '🎱 랜덤추첨',
  '🙆‍♂️ O/X게임',
  '🎮 초성게임',
  '💞 1:1팬미팅',
];

export default function ScheduleListSelect() {
  const id = useParams().id;
  const history = useHistory();
  const dispatch = useDispatch();
  const { storeSession } = useSelector(state => ({
    storeSession: state.MeetingRoom.storeSession,
  }));
  const { selectNum, backgroundColor } = useSelector(
    state => state.MeetingRoom
  );
  const { endMeetingDone } = useSelector(state => state.meeting);

  useEffect(() => {
    if (endMeetingDone) {
      storeSession.signal({
        data: '0',
        to: [],
        type: 'end',
      });
      storeSession.disconnect();
      history.push(`/schedule/${id}`);
    }
  }, [endMeetingDone, history, id, storeSession]);

  const SetSelect = selectNum => {
    if (selectNum === 6) dispatch(ResetIndex());

    storeSession.signal({
      data: `${selectNum}`,
      to: [],
      type: 'screen',
    });
    dispatch(ScreenChange(selectNum));
  };

  const endButton = () => {
    swal({
      text: '팬미팅을 종료하시겠습니까?',
      buttons: true,
    }).then(end => {
      if (end) {
        dispatch({
          type: END_MEETING_REQUEST,
          data: id,
        });
      }
    });
  };

  return (
    <>
      <HalfSideDiv1>
        <SmallBoxSelectSchedule>
          <ScheduleListWrapper>
            {List.map((list, index) => (
              <ScheduleListBox
                key={index}
                onClick={() => SetSelect(index)}
                check={index === selectNum ? '1' : '0'}
                color={index === selectNum ? backgroundColor : blockColor}
              >
                {list}
              </ScheduleListBox>
            ))}
            <ScheduleListBox
              onClick={() => endButton()}
              check={'0'}
              color={blockColor}
            >
              💣 팬미팅종료
            </ScheduleListBox>
          </ScheduleListWrapper>
        </SmallBoxSelectSchedule>
      </HalfSideDiv1>
    </>
  );
}
