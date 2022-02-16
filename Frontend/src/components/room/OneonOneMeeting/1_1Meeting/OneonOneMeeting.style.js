import styled from 'styled-components';

const StarSelfCamBox = styled.div`
  position: relative;
  width: 100%;
  height: 80.5vh;
  border-radius: 1vh;
  background-color: rgb(255, 255, 255, 0.5);
`;
const UserSelfCamBox = styled.div`
  position: relative;
  width: 100%;
  height: 80.5vh;
  border-radius: 1vh;
  background-color: rgb(255, 255, 255, 0.5);
`;

const MainDiv = styled.div`
  position: absolute;
  top: 10%;
  left: 4%;
`;
const MainGrid = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
`;

const SmallBox = styled.div`
  position: relative;
  margin-top: 1vh;
  width: 20vw;
  height: 49.5vh;
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ChattingInputBox = styled.input`
  border-radius: 1vh;
  height: 2vh;
  margin: 0 1vh 1vh 1vh;
  width: 84%;
  border: none;
  padding: 1vw;
  outline: none;
  background-color: ${props => props.color};
`;

const ChattingListBox = styled.div`
  margin: 1vh;
  padding: 1vw;
  border-radius: 1vh;
  width: 84%;
  height: 35vh;
  background-color: #f5f5f5;
  color: black;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d2d0d0;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

export {
  StarSelfCamBox,
  UserSelfCamBox,
  MainDiv,
  MainGrid,
  SmallBox,
  ChattingInputBox,
  ChattingListBox,
};
