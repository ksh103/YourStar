import styled from 'styled-components';
import { pointColor } from '../../styles/variables';

const Title = styled.div`
  font-size: 2.2vw;
  color: black;
  height: 10vh;
  padding-right: 3vw;
  /* border: solid red; */
  display: flex; // div태그 내 text 수직, 수평정렬
  align-items: center; // div태그 내 text 수직, 수평정렬
  /* justify-content: center; // div태그 내 text 수직, 수평정렬 */
  div {
    padding-left: 1.2vw;
    padding-right: 0;
    text-align: left;
  }
`;

const UploadImage = styled.div`
  border-radius: 5%;
  background-color: #dfe4ea;
  margin-top: 5vh;
  margin-left: 3vw;
  margin-right: 2vw;
  height: 56vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputData = styled.div`
  margin-top: 5vh;
  margin-right: 3vw;
  margin-bottom: 1em;
`;

const ApplyButton = styled.div`
  margin-right: 3vw;
  text-align: center;
  button {
    width: 100px;
    height: 40px;
    color: white;
    background-color: ${pointColor};
    border-radius: 10px;
  }
`;

export { Title, UploadImage, InputData, ApplyButton };
