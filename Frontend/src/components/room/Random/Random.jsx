import React from 'react';
import styled from 'styled-components';
import RandomChoiceMain from '../../../components/room/CommonComponents/MainItems/Game/RandomChoiceMain';
import RandomStick from '../../../components/room/CommonComponents/BottomItems/RandomStick';
import { BackgroundDiv } from '../styles/roomGlobal';

export default function Random() {
  return (
    <BackgroundDiv>
      <RandomChoiceMain></RandomChoiceMain>
      <RandomStick></RandomStick>
    </BackgroundDiv>
  );
}
