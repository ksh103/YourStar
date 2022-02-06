import React, { useState } from 'react';
import { HalfSideDiv1, SmallBox } from '../Chatting/Chatting.style';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
// import { changeList } from '../../../../../store/modules/selectList';
import { ScreenChange } from '../../../../../store/modules/meetingRoom';
const ScheduleListWrapper = styled.div`
  /* border: solid red; */
  border-radius: 1vw;
  position: absolute;
  top: 2vh;
  left: 0.8vw;
  width: 18vw;
  height: 28vh;
  overflow-y: auto;
`;
const ScheduleListBox = styled.div`
  /* border: solid red; */
  background-color: black;
  border-radius: 1vw;
  margin-top: 1vh;
  margin-bottom: 1vh;
  margin-left: 0.8vw;
  width: 16vw;
  height: 4vh;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

  const dispatch = useDispatch();

  const SetSelect = selectNum => dispatch(ScreenChange(selectNum));

  return (
    <>
      <HalfSideDiv1>
        <SmallBox>
          <ScheduleListWrapper>
            {List.map((list, index) => (
              <ScheduleListBox key={index} onClick={() => SetSelect(index)}>
                {list}
              </ScheduleListBox>
            ))}
          </ScheduleListWrapper>
        </SmallBox>
      </HalfSideDiv1>
    </>
  );
}
