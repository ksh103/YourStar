import React from 'react';
import styled from 'styled-components';
import { HalfSideDiv1, SmallBox } from '../../Chatting/Chatting.style';

const RankBox = styled.div`
  position: absolute;
  top: 1%;
  left: 10%;
  right: 10%;
  margin: 1vh auto;
  border-radius: 1vw;
  width: 75%;
  height: 25vh;
  padding: 1vh;
  margin-top: 2vh;
  background-color: black;
  color: white;
`;
export default function ConsonantMyRank() {
  return (
    <>
      <HalfSideDiv1>
        <SmallBox>
          <RankBox>여기에 랭크를 적을겁니다.</RankBox>
        </SmallBox>
      </HalfSideDiv1>
    </>
  );
}
