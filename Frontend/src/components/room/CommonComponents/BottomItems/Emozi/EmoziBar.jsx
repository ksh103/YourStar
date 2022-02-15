import React from 'react';
import styled from 'styled-components';
import Emozi from './Emozi';

const EmoziCompo = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60.1416vw;
  height: 8vh;
  background-color: white;
  border-radius: 4vh;
  // box-shadow: 0.306vh 0.306vh gray;
`;

const EmoziPs = styled.div`
  position: absolute;
  top: 83%;
  left: 20%;
`;

export default function EmoziBar() {
  return (
    <EmoziPs>
      <EmoziCompo>
        <Emozi></Emozi>
      </EmoziCompo>
    </EmoziPs>
  );
}
