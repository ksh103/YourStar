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
   {
    animation: 2s ease-in-out loadEffect1;
  }

  @keyframes loadEffect1 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
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

const ContentTextArea = styled.div`
  position: absolute;
  font-size: 21px;
  top: 6%;
  left: 2%;
  width: 96%;
  height: 70%;
  overflow-y: auto;
  li {
    color: black;
    padding: 1vw;
  }
`;

const ButtonInputArea = styled.div`
  position: absolute;
  left: 2.5%;
  bottom: 4%;
  width: 95%;
  height: 22%;
  input {
    position: relative;
    top: 35%;
    border-radius: 1vh;
    padding-left: 0.52vw;
    padding-right: 0.52vw;
    width: 75%;
    height: 5.1vh;
    font-size: 1em;
  }
  button {
    position: relative;
    width: 18%;
    height: 5vh;
    right: -4%;
    top: 35%;
    background: #ff5455;
    border: 0.2vw solid #000000;
    border-radius: 1vw;
  }
`;

const PlaceHolderText = styled.div`
  pointer-events: none;
  position: absolute;
  top: 40.5%;
  border-radius: 1vh;
  padding-left: 0.6vw;
  width: 75%;
  height: 5.1vh;
  z-index: 0;
  color: #c8c8c8;
  font-size: 0.8em;
`;

export {
  AlertParentDiv,
  AlertHead,
  ExitIcon,
  HeadTextArea,
  HeadContent,
  AlertBody,
  PlaceHolderText,
  ButtonInputArea,
  ContentTextArea,
};
