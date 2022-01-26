import React from 'react';
import styled from 'styled-components';
import { SmallBox, HalfSideDiv2 } from '../../../../Chatting/Chatting.style';

const OButton = styled.div`
  position: absolute;
  background-color: #2525ff;
  top: 2vh;
  left: 0.8vw;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4vw;
  border-radius: 1vw;
  height: 13vh;
  width: 18vw;
`;
const XButton = styled.div`
  position: absolute;
  background-color: #ff2525;
  bottom: 2vh;
  left: 0.8vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4vw;
  cursor: pointer;
  border-radius: 1vw;
  height: 13vh;
  width: 18vw;
`;
export default function OXButtonStar() {
  return (
    <>
      <HalfSideDiv2>
        <SmallBox>
          <OButton>O</OButton>
          <XButton>X</XButton>
        </SmallBox>
      </HalfSideDiv2>
    </>
  );
}
