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
  background-color: ${blockColor};
  border-radius: 10px;
  color: black;
  overflow-y: auto;
  @media ${device.TabletPortrait} {
    width: 100%;
    border-radius: 0px;
  }
`;

export { ScheduleBlock, ScheduleWrapper };
