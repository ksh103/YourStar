import styled from 'styled-components';
import { blockColor, device, pointColor } from '../../styles/variables';

const ScheduleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ScheduleBlock = styled.div`
  max-width: 1200px;
  width: 70%;
  height: 78.5vh;
  overflow-y: auto;
  background-color: ${blockColor};
  border-radius: 10px;
  color: black;
  @media ${device.TabletPortrait} {
    width: 100%;
    border-radius: 0px;
  }
`;
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
  /* border: solid red; */
  margin-top: 5vh;
  margin-left: 3vw;
  margin-right: 2vw;
  height: 56vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputData = styled.div`
  /* border: solid red; */
  margin-top: 5vh;
  margin-right: 3vw;
  height: 56vh;
`;

export { ScheduleWrapper, Title, ScheduleBlock, UploadImage, InputData };
