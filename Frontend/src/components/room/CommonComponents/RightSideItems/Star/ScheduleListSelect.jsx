import React from 'react';
import { HalfSideDiv1, SmallBox } from '../../../Chatting/Chatting.style';
import styled from 'styled-components';

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

export default function ScheduleListSelect() {
  return (
    <>
      <HalfSideDiv1>
        <SmallBox>
          <ScheduleListWrapper>
            <ScheduleListBox>1</ScheduleListBox>
            <ScheduleListBox>2</ScheduleListBox>
            <ScheduleListBox>3</ScheduleListBox>
            <ScheduleListBox>4</ScheduleListBox>
            <ScheduleListBox>5</ScheduleListBox>
            <ScheduleListBox>6</ScheduleListBox>
            <ScheduleListBox>7</ScheduleListBox>
          </ScheduleListWrapper>
        </SmallBox>
      </HalfSideDiv1>
    </>
  );
}
