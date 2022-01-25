import { style } from '@mui/system';
import styled from 'styled-components';

const StanbyBox = styled.div`
  /* border: solid red; */
  margin-left: 5.2vw;
  margin-right: 5.2vw;
  margin-top: 6.9vh;
  margin-bottom: 10vh; // 나중 지우기!!!!!!!!
`;

const ChattingWrapper = styled.div`
  margin-top: 2vh;
  margin-left: 3vw;
  margin-right: 3vw;
`;
const SelfCamWrapper = styled.div`
  margin-top: 2vh;
  margin-left: 3vw;
  margin-right: 3vw;
`;

const WaitingTimeWrapper = styled.div`
  margin-left: 3vw;
  margin-right: 3vw;
`;

export { StanbyBox, WaitingTimeWrapper, SelfCamWrapper, ChattingWrapper };
