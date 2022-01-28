import styled from 'styled-components';
import { pointColor, scheduleColor } from '../../../styles/variables';
const SchduleCalendarWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Header = styled.div`
  color: black;
  height: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;

  & > span {
    margin: 0 50px;
    font-weight: bold;
  }
  & > .dir {
    color: gray;
    &:hover {
      cursor: pointer;
    }
  }
`;
const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const Weekend = styled.div`
  display: flex;
`;
const Dow = styled.div`
  width: 100%;
  height: 35px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.color ? props.color : 'black')};
  border-bottom: 1px solid gray;
`;
const DayBlock = styled.div`
  padding-top: 4px;
  height: 10vh;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: hidden;
  color: black;
  font-size: 0.8em;
  &.grayed {
    color: gray;
  }
  &.today > .title {
    color: white;
    background-color: ${pointColor};
  }
  & > .title {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 25px;
    height: 25px;
  }
`;

const PlanButton = styled.span`
  background-color: ${props => scheduleColor[props.num % 6]};
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 20px;
  width: 100%;
  border-radius: 15px;
  color: black;

  cursor: pointer;
`;
export {
  SchduleCalendarWrapper,
  Header,
  DateContainer,
  Weekend,
  Dow,
  DayBlock,
  PlanButton,
};
