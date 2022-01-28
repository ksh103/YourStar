import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
const StickBar = styled.div`
  width: 60.1416vw;
  height: 5.517vh;
  background-color: white;
  border-radius: 3vh;
  box-shadow: 0.306vh 0.306vh gray;
`;

const StickBarDiv = styled.div`
  position: absolute;
  top: 65.5%;
  left: 8%;
`;

export default function SubStickBar() {
  return (
    <StickBarDiv>
      <StickBar></StickBar>
    </StickBarDiv>
  );
}
