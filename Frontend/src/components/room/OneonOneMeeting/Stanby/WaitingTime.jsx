import React from 'react';
import styled from 'styled-components';

const WaitingTimeBox = styled.div`
  /* border: solid red; */
  border-radius: 5%;
  background-color: white;
  color: black;
  height: 20vh;
`;

export default function WaitingTime() {
  return (
    <>
      <WaitingTimeBox>
        <div>waiting Time</div>
      </WaitingTimeBox>
    </>
  );
}
