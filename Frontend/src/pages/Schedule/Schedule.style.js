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
  background-color: ${blockColor};
  border-radius: 10px;
  color: black;
  @media ${device.TabletPortrait} {
    width: 100%;
    border-radius: 0px;
  }
`;

const ScheduleMenu = styled.div`
  text-align: center;
  padding: 15px 0;
`;

const Menu = styled.div`
  cursor: pointer;
  color: ${props => (props.flag === 1 ? pointColor : 'black')};
  font-size: 35px;
  margin: 0 15px;
  display: inline-block;
`;

const ScheduleContent = styled.div`
  height: 70vh;
  overflow-y: auto;
  margin: 0 20px;
`;
export { ScheduleBlock, ScheduleMenu, Menu, ScheduleWrapper, ScheduleContent };
