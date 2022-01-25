import styled from 'styled-components';

const QuestionMain = styled.div`
  width: 980px;
  height: 500px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 3px 3px gray;
`;

const QuestionDiv = styled.div`
  width: 930px;
  height: 70px;
  padding-right: 20px;
  padding-left: 20px;
  background-color: white;
  border-radius: 35px;
  box-shadow: 3px 3px gray;
`;

const QuestionMyScreen = styled.div`
  width: 285px;
  height: 220px;
  background-color: white;
  border-radius: 35px;
  box-shadow: 3px 3px gray;
`;

const QuestionOthersScreen = styled.div`
  width: 980px;
  height: 220px;
  background-color: white;
  border-radius: 35px;
  box-shadow: 3px 3px gray;
`;

const ChatInput = styled.input`
  border-radius: 20px;
  max-width : 220px
  width: 220px;
  height: 50px;
  background-color: #e2d8ff;
  border: none;
  position: absolute;
  top: 67.5%;
  left: 7.5%;
`;

export {
  QuestionMain,
  QuestionDiv,
  QuestionMyScreen,
  QuestionOthersScreen,
  ChatInput,
};
