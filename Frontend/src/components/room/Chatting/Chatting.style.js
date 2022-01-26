import styled from 'styled-components';

const QuestionChating = styled.div`
  position: relative;
  width: 20vw;
  height: 66.39vh;
  background-color: white;
  border-radius: 1vw;
  box-shadow: 0.306vh 0.306vh gray;
`;

const QuestionInput = styled.input`
  position: absolute;
  top: 90%;
  left: 10%;
  right: 10%;
  border-radius: 1vw;
  width: 75%;
  height: 5.1vh;
  background-color: #e2d8ff;
  border: none;
  padding-right: 0.52vw;
  padding-left: 0.52vw;
`;

const QuestionChatingList = styled.div`
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
  background-color: black;
  color: white;
`;

export { QuestionChating, QuestionChatingList, QuestionInput };
