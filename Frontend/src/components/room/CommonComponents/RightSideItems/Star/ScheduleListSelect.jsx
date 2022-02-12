import React, { useState } from 'react';
import { HalfSideDiv1, SmallBox } from '../Chatting/Chatting.style';
import { useSelector, useDispatch } from 'react-redux';
// import { changeList } from '../../../../../store/modules/selectList';
import { ScreenChange } from '../../../../../store/modules/meetingRoom';
import {
  ScheduleListBox,
  ScheduleListWrapper,
} from './ScheduleListSelect.style';
import { blockColor } from '../../../../../styles/variables';

const List = [
  '대기화면',
  '공연모드',
  'QnA모드',
  '랜덤추첨',
  'O/X게임',
  '초성게임',
  '1:1팬미팅',
];

export default function ScheduleListSelect() {
  // const { selectNum } = useSelector(state => ({
  //   selectNum: state.selectmode.selectNum,
  // }));

  const { storeSession } = useSelector(state => ({
    storeSession: state.MeetingRoom.storeSession,
  }));
  const { selectNum, backgroundColor } = useSelector(
    state => state.MeetingRoom
  );
  const dispatch = useDispatch();

  const SetSelect = selectNum => {
    storeSession.signal({
      data: `${selectNum}`,
      to: [],
      type: 'screen',
    });
    dispatch(ScreenChange(selectNum));
  };

  return (
    <>
      <HalfSideDiv1>
        <SmallBox>
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
          </ScheduleListWrapper>
        </SmallBox>
      </HalfSideDiv1>
    </>
  );
}
