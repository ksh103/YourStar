import styled from 'styled-components';

const StanbyBox = styled.div`
  /* border: solid red; */
  margin-left: 5.2vw;
  margin-right: 5.2vw;
  margin-top: 6.9vh;
`;

const ChattingWrapper = styled.div`
  border-radius: 1vw;
  margin-top: 2vh;
  margin-left: 3vw;
  margin-right: 3vw;
  height: 39.1vh;
  background-color: white;
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
  margin-left: 3vw;
  margin-right: 3vw;
  height: 21vh;
  background-color: white;
`;
const StanbyChattingBox = styled.div`
  /* border: solid red; */
  border-radius: 1vw;
  background-color: gray;
  color: black;
  height: 39.1vh;
`;
const OneonOneDisplayBox = styled.div`
  /* border: solid red; */
  border-radius: 1vw;
  height: 85vh;
  width: 65vw;
  background-color: gray;
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
// const WaitingTimeBox = styled.div`
//   /* border: solid red; */
//   border-radius: 1vw;
//   background-color: gray;
//   color: black;
//   position: relative;
//   top: 2.5vh;
//   left: 1.2vw;
//   height: 16vh;
//   width: 14vw;
// `;

const ChatInput = styled.input`
  border-radius: 1vw;
  width: 220px;
  height: 50px;
  background-color: #e2d8ff;
  border: none;
  position: relative;
  top: 67.5%;
  left: 7.5%;
`;

export {
  StanbyBox,
  WaitingTimeWrapper,
  SelfCamWrapper,
  ChattingWrapper,
  StanbyChattingBox,
  OneonOneDisplayBox,
  StanbySelfCamBox,
  ChatInput,
  // WaitingTimeBox,
};
