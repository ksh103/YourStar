import styled from 'styled-components';

const StarSelfCamBox = styled.div`
  // position: relative;
  width: 95%;
  height: 67.5vh;
  border-radius: 1vh;
  // margin-right: 0.8vw;
  // display: flex;
  // align-items: center;
  // justify-content: center;
`;
const UserSelfCamBox = styled.div`
  // position: relative;
  margin-top: -2vh;
  width: 95%;
  height: 67.5vh;
  border-radius: 1vh;
  // margin-right: 0.8vw;
  // display: flex;
  // align-items: center;
  // justify-content: center;
`;

const MainDiv = styled.div`
  position: absolute;
  // top: 12%;
  // left: 4%;
  // right: 4%;
  padding: 100px;
`;
const MainGrid = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
`;

const SmallBox = styled.div`
  position: relative;
  width: 20vw;
  height: 30vh;
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 1vh;
  // box-shadow: 0.306vh 0.306vh gray;
`;

export { StarSelfCamBox, UserSelfCamBox, MainDiv, MainGrid, SmallBox };
