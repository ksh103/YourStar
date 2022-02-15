import styled from 'styled-components';

const HalfSideDiv1 = styled.div`
  position: absolute;
  top: 4%;
  right: 8%;
`;

const LongChattingBox = styled.div`
  position: relative;
  width: 20vw;
  height: 66.39vh;
  background-color: white;
  border-radius: 1vh;
  box-shadow: 0.306vh 0.306vh gray;
`;

const LongChattingInputBox = styled.input`
  position: absolute;
  top: 90%;
  left: 10%;
  right: 10%;
  border-radius: 1vh;
  width: 75%;
  height: 5.1vh;
  background-color: ${props => props.color};
  border: none;
  padding-right: 0.52vw;
  padding-left: 0.52vw;
  outline: none;
`;

const LongChattingListBox = styled.div`
  position: absolute;
  top: 1%;
  left: 10%;
  right: 10%;
  margin: 1vh auto;
  border-radius: 1vh;
  width: 75%;
  height: 54vh;
  padding: 1vh;
  margin-top: 2vh;
  background-color: #f5f5f5;
  color: black;
  font-size: 20px;
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

const HalfSideDiv2 = styled.div`
  position: absolute;
  top: 35.5%;
  right: 8%;
`;

const SmallBox = styled.div`
  position: relative;
  width: 20vw;
  height: 36vh;
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 1vh;
  // box-shadow: 0.306vh 0.306vh gray;
  // margin-top: -0.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BigBoxOXGame = styled.div`
  position: relative;
  width: 20vw;
  height: 36vh;
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SmallBoxOXGame = styled.div`
  display: flex;
  max-height: 50%;
  // flex-direction: column;
  // align-items: center;
`;

const SmallBoxSelectSchedule = styled.div`
  position: relative;
  width: 20vw;
  height: 30vh;
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 1vh;
  // box-shadow: 0.306vh 0.306vh gray;
`;

const SmallChattingInputBox = styled.input`
  border-radius: 1vh;
  height: 2vh;
  margin: 0 1vh 1vh 1vh;
  width: 84%;
  border: none;
  padding: 1vw;
  outline: none;
  background-color: ${props => props.color};
`;

const SmallChattingInputDiv = styled.div`
  width: 100%;
`;

const SmallChattingListBox = styled.div`
  margin: 1vh;
  padding: 1vw;
  border-radius: 1vh;
  width: 84%;
  height: 25vh;
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

const ThridSideDiv1 = styled.div`
  position: absolute;
  top: 4.5%;
  right: 8%;
`;
const ThridSideDiv2 = styled.div`
  position: absolute;
  top: 27%;
  right: 8%;
`;
const ThridSideDiv3 = styled.div`
  position: absolute;
  top: 73%;
  right: 8%;
`;

const MiddleChattingBox = styled.div`
  position: relative;
  width: 20vw;
  height: 45vh;
  background-color: white;
  border-radius: 1vh;
  box-shadow: 0.306vh 0.306vh gray;
`;

const MiddleChattingInputBox = styled.input`
  position: absolute;
  top: 83%;
  left: 10%;
  right: 10%;
  border-radius: 1vh;
  width: 75%;
  height: 5.1vh;
  background-color: ${props => props.color};
  border: none;
  padding-right: 0.52vw;
  padding-left: 0.52vw;
  outline: none;
`;

const MiddleChattingListBox = styled.div`
  position: absolute;
  top: 1%;
  left: 10%;
  right: 10%;
  margin: 1vh auto;
  border-radius: 1vh;
  width: 75%;
  height: 31vh;
  padding: 1vh;
  margin-top: 2vh;
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

const ConcertChattingBox = styled.div`
  position: relative;
  width: 20vw;
  height: 75vh;
  background-color: white;
  border-radius: 1vh;
  box-shadow: 0.306vh 0.306vh gray;
`;

const ConcertChattingInputBox = styled.input`
  position: absolute;
  top: 90%;
  left: 10%;
  right: 10%;
  border-radius: 1vh;
  width: 75%;
  height: 5.1vh;
  background-color: ${props => props.color};
  border: none;
  padding-right: 0.52vw;
  padding-left: 0.52vw;
  outline: none;
`;

const ConcertChattingListBox = styled.div`
  position: absolute;
  top: 1%;
  left: 10%;
  right: 10%;
  margin: 1vh auto;
  border-radius: 1vh;
  width: 75%;
  height: 63vh;
  padding: 1vh;
  margin-top: 2vh;
  background-color: #f5f5f5;
  color: black;
  overflow-y: auto;
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

const StarSmallBox = styled.div`
  position: relative;
  width: 20vw;
  height: 43.5vh;
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 1vh;
  // box-shadow: 0.306vh 0.306vh gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StarSmallChattingInputBox = styled.input`
  display: block;
  border-radius: 1vh;
  height: 2vh;
  margin: 0 1vh 1vh 1vh;
  width: 84%;
  border: none;
  padding: 1vw;
  outline: none;
  background-color: ${props => props.color};
`;

const StarSmallChattingListBox = styled.div`
  margin: 1vh;
  padding: 1vw;
  border-radius: 1vh;
  width: 84%;
  height: 31vh;
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
  LongChattingInputBox,
  LongChattingListBox,
  HalfSideDiv1,
  HalfSideDiv2,
  ThridSideDiv1,
  ThridSideDiv2,
  ThridSideDiv3,
  LongChattingBox,
  SmallBox,
  SmallBoxOXGame,
  BigBoxOXGame,
  SmallBoxSelectSchedule,
  SmallChattingListBox,
  SmallChattingInputBox,
  SmallChattingInputDiv,
  MiddleChattingListBox,
  MiddleChattingInputBox,
  MiddleChattingBox,
  ConcertChattingBox,
  ConcertChattingListBox,
  ConcertChattingInputBox,
  StarSmallChattingListBox,
  StarSmallChattingInputBox,
  StarSmallBox,
};
