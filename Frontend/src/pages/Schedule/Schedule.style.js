import styled from 'styled-components';
import { device, pointColor } from '../../styles/variables';

const ScheduleMenu = styled.div`
  height: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  cursor: pointer;
  color: ${props => (props.flag === 1 ? pointColor : 'black')};
  font-size: 2em;
  margin: 0 15px;
  display: inline-block;
`;

const ScheduleContent = styled.div`
  height: 88%;
  #schedule {
    height: 100%;
    margin: 0 10px;
    overflow-y: auto;
    @media ${device.TabletPortrait} {
      margin: 0;
    }
  }
`;
export { ScheduleMenu, Menu, ScheduleContent };
