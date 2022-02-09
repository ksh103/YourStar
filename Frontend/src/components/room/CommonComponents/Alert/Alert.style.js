import styled from 'styled-components';

const AlertParentDiv = styled.div`
  position: absolute;
  top: 15%;
  left: 25%;
  width: 50%;
  height: 70%;
  background-color: white;
  border-radius: 3vh;
  box-shadow: 0.306vh 0.306vh gray;
`;

const AlertHead = styled.div`
  position: relative;
  width: 100%;
  height: 25%;
  background-color: gray;
  border-top-left-radius: 3vh;
  border-top-right-radius: 3vh;
`;

const ExitIcon = styled.div`
  position: absolute;
  right: 5%;
  top: 20%;
  width: 3vw;
  height: 2vh;
  display: flex;
`;

const HeadTextArea = styled.div`
  position: absolute;
  left: 5%;
  top: 17%;
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const HeadContent = styled.div`
  background-color: gray;
  color: black;
`;

const AlertBody = styled.div`
  position: absolute;
  width: 100%;
  height: 75%;
  border-bottom-left-radius: 3vh;
  border-bottom-right-radius: 3vh;
`;

export {
  AlertParentDiv,
  AlertHead,
  ExitIcon,
  HeadTextArea,
  HeadContent,
  AlertBody,
};
