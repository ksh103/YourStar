import styled from 'styled-components';

// const StanbyBox = styled.div`
//   border: 1px solid red;
//   /* width: 1px; */
// `;

const StarScreen = styled.div`
  position: relative;
  left: 20%;
  top: 10%;
  width: 60%;
  height: 66.5vh;
  background-color: white;
  border-radius: 3.0643vh;
  /* box-shadow: 0.306vh 0.306vh gray; */
`;

const ColorCircleWrapper = styled.div`
  position: relative;
  top: 3vh;
  left: 3vw;
  width: 15vw;
  height: 4vh;
`;
const ColorCircleBox = styled.div`
  /* display: flex; */
  padding-top: 20px;
  width: 10vw;
  justify-content: center;
  align-items: center;
  height: 3.8vh;
`;

const SettingWrapper = styled.div`
  position: relative;
  top: 15%;
  left: 34vw;
  width: 30vw;
  height: 7vh;
`;
const SettingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6.8vh;
  color: black;
  font-size: 2vw;
`;

const SettingIcons = styled.div`
  margin-left: 5vw;
  cursor: pointer;
`;

const CircleIconBox = styled.div``;

export {
  //   StanbyBox,
  ColorCircleWrapper,
  ColorCircleBox,
  CircleIconBox,
  SettingWrapper,
  SettingBox,
  SettingIcons,
  StarScreen,
};
