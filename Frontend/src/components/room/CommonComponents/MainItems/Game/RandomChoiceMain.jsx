import React from 'react';
import styled from 'styled-components';

// 60vw 가로폭
const RandomChoiceSc = styled.div`
  position: relative;
  display: inline-flex;
  width: 28.041vw;
  height: 66.5vh;
  background-color: white;
  border-radius: 3.0643vh;
  box-shadow: 0.306vh 0.306vh gray;
  margin-right: 4vw;
`;

export default function RandomChoiceMain() {
  return (
    <div>
      <RandomChoiceSc></RandomChoiceSc>
      <RandomChoiceSc></RandomChoiceSc>
    </div>
  );
}
