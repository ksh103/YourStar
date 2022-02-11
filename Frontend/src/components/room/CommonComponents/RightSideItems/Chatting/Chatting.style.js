import styled from 'styled-components';

const HalfSideDiv1 = styled.div`
  position: absolute;
  top: 4.5%;
  right: 8%;
`;

const LongChattingBox = styled.div`
  position: relative;
  width: 20vw;
  height: 66.39vh;
  background-color: white;
  border-radius: 1vw;
  box-shadow: 0.306vh 0.306vh gray;
`;

const LongChattingInputBox = styled.input`
  position: absolute;
  top: 90%;
  left: 10%;
  right: 10%;
  border-radius: 1vw;
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
  border-radius: 1vw;
  width: 75%;
  height: 54vh;
  padding: 1vh;
  margin-top: 2vh;
  background-color: #f5f5f5;
  color: black;
  font-size: 20px;
  overflow-y: scroll;
`;

const HalfSideDiv2 = styled.div`
  position: absolute;
  top: 39%;
  right: 8%;
`;

const SmallBox = styled.div`
  position: relative;
  width: 20vw;
  height: 32vh;
  background-color: white;
  border-radius: 1vw;
  box-shadow: 0.306vh 0.306vh gray;
`;

const SmallChattingInputBox = styled.input`
  position: absolute;
  top: 78%;
  left: 10%;
  right: 10%;
  border-radius: 1vw;
  width: 75%;
  height: 5.1vh;
  background-color: ${props => props.color};
  border: none;
  padding-right: 0.52vw;
  padding-left: 0.52vw;
  outline: none;
`;

const SmallChattingListBox = styled.div`
  position: absolute;
  top: 1%;
  left: 10%;
  right: 10%;
  margin: 1vh auto;
  border-radius: 1vw;
  width: 75%;
  height: 19vh;
  padding: 1vh;
  margin-top: 2vh;
  background-color: #f5f5f5;
  color: black;
  overflow-y: scroll;
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
  top: 74%;
  right: 8%;
`;

const MiddleChattingBox = styled.div`
  position: relative;
  width: 20vw;
  height: 45vh;
  background-color: white;
  border-radius: 1vw;
  box-shadow: 0.306vh 0.306vh gray;
`;

const MiddleChattingInputBox = styled.input`
  position: absolute;
  top: 83%;
  left: 10%;
  right: 10%;
  border-radius: 1vw;
  width: 75%;
  height: 5.1vh;
  background-color: ${props => props.color};
  border: none;
  padding-right: 0.52vw;
  padding-left: 0.52vw;
  outline: none;
  overflow-y: scroll;
`;

const MiddleChattingListBox = styled.div`
  position: absolute;
  top: 1%;
  left: 10%;
  right: 10%;
  margin: 1vh auto;
  border-radius: 1vw;
  width: 75%;
  height: 31vh;
  padding: 1vh;
  margin-top: 2vh;
  background-color: #f5f5f5;
  color: black;
`;

const ConcertChattingBox = styled.div`
  position: relative;
  width: 20vw;
  height: 75vh;
  background-color: white;
  border-radius: 1vw;
  box-shadow: 0.306vh 0.306vh gray;
`;

const ConcertChattingInputBox = styled.input`
  position: absolute;
  top: 90%;
  left: 10%;
  right: 10%;
  border-radius: 1vw;
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
  border-radius: 1vw;
  width: 75%;
  height: 60vh;
  padding: 1vh;
  margin-top: 2vh;
  background-color: #f5f5f5;
  color: black;
  overflow-y: auto;
  overflow-y: scroll;
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
  SmallChattingListBox,
  SmallChattingInputBox,
  MiddleChattingListBox,
  MiddleChattingInputBox,
  MiddleChattingBox,
  ConcertChattingBox,
  ConcertChattingListBox,
  ConcertChattingInputBox,
};
