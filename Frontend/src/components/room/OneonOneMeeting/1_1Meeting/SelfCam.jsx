import React from 'react';
import styled from 'styled-components';

const SelfCamBox = styled.div`
  /* border: solid red; */
  border-radius: 5%;
  height: 70vh;
  width: 30vw;
  background-color: white;
`;

export default function SelfCam() {
  return (
    <>
      <div>
        <SelfCamBox></SelfCamBox>
      </div>
    </>
  );
}
