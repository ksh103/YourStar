import React from 'react';
import styled from 'styled-components';

const SelfCamBox = styled.div`
  border-radius: 5%;
  height: 75vh;
  width: 35vw;
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
