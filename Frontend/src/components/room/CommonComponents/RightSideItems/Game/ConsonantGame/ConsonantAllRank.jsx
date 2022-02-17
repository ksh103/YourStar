import React from 'react';
import { HalfSideDiv1, SmallBox } from '../../Chatting/Chatting.style';
import styled from 'styled-components';

const ScheduleListWrapper = styled.div`
  border-radius: 1vw;
  position: absolute;
  top: 2vh;
  left: 0.8vw;
  width: 18vw;
  height: 28vh;
  overflow-y: auto;
`;
const ScheduleListBox = styled.div`
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

export default function ConsonantAllRank() {
  return (
    <>
      <HalfSideDiv1>
        <SmallBox>
          <ScheduleListWrapper>
            <ScheduleListBox>나중 랭크 이름적어주기</ScheduleListBox>
            <ScheduleListBox>지수민</ScheduleListBox>
            <ScheduleListBox>박동준</ScheduleListBox>
            <ScheduleListBox>강소현</ScheduleListBox>
            <ScheduleListBox>안영원</ScheduleListBox>
            <ScheduleListBox>김지슬</ScheduleListBox>
            <ScheduleListBox>손은성</ScheduleListBox>
          </ScheduleListWrapper>
        </SmallBox>
      </HalfSideDiv1>
    </>
  );
}
