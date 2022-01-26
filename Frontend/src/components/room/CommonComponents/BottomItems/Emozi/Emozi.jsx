import React from 'react';
import styled from 'styled-components';

const EmoticonsPlace = styled.div`
  /* width: 5.541vw;
  height: 8.01vh; */
  /* background-color: #ffffff; */
  cursor: pointer;
  font-size: 2.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Emozi() {
  return (
    <>
      <EmoticonsPlace>👍</EmoticonsPlace>
      <EmoticonsPlace>👏</EmoticonsPlace>
      <EmoticonsPlace>&#128150;</EmoticonsPlace>
      <EmoticonsPlace>😍</EmoticonsPlace>
      <EmoticonsPlace>💋</EmoticonsPlace>
      <EmoticonsPlace>😥</EmoticonsPlace>
    </>
  );
}
