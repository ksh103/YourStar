import styled from 'styled-components';

const StanbyBox = styled.div`
  position: absolute;
  top: 4.5%;
  left: 8%;
`;

const SelfCamWrapper = styled.div`
  border-radius: 1vw;
  margin-top: 2vh;
  margin-left: 3vw;
  margin-right: 3vw;
  height: 21vh;
  background-color: white;
`;

const WaitingTimeWrapper = styled.div`
  border-radius: 1vw;
  width: 20vw;
  height: 21vh;
  background-color: white;
  box-shadow: 0.306vh 0.306vh gray;
`;

const OneonOneDisplayBox = styled.div`
  /* border: solid red; */
  border-radius: 1vw;
  height: 91vh;
  width: 60vw;
  background-color: white;
`;
const StanbySelfCamBox = styled.div`
  /* border: solid red; */
  border-radius: 1vw;
  background-color: gray;
  color: black;
  position: relative;
  top: 1.5vh;
  left: 1.7vw;
  height: 18vh;
  width: 13vw;
`;

export {
  StanbyBox,
  WaitingTimeWrapper,
  SelfCamWrapper,
  OneonOneDisplayBox,
  StanbySelfCamBox,
  // WaitingTimeBox,
};
