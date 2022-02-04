import styled from 'styled-components';
import { device, pointColor } from '../../../styles/variables';

const ScheduleDetailWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ScheduleDetailHeader = styled.div`
  height: 13%;
`;
const ScheduleDetailTitle = styled.div`
  margin: 0 1.5em;
  height: 100%;
  border-bottom: 2px solid gray;
  display: flex;
  align-items: center;
  #meeting-icon {
    cursor: pointer;
    font-size: 30px;
    &:hover {
      color: ${pointColor};
    }
  }
  #meeting-name {
    font-size: 1.3em;
    font-weight: bold;
    margin-left: 3em;
  }
`;

const ScheduleDetailContent = styled.div`
  height: 80%;
  #detail {
    height: 100%;
    margin: 0 10px;
    overflow-y: auto;
    display: flex;
    justify-content: center;
  }
  #detail #detail2 {
    width: 80%;
    height: 100%;
    display: flex;
    @media ${device.TabletPortrait} {
      flex-direction: column;
    }
  }
`;
const ScheduleDetailLeftWrapper = styled.div`
  width: 40%;
  @media ${device.TabletPortrait} {
    width: 100%;
  }
`;
const ScheduleDetailRightWrapper = styled.div`
  width: 60%;
  @media ${device.TabletPortrait} {
    width: 100%;
  }
`;

const ScheduleDetailImage = styled.div`
  text-align: center;
  img {
    max-width: 300px;
    max-height: 50vh;
    width: 100%;
    object-fit: contain;
  }
`;
const ScheduleDetailButton = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    max-width: 250px;
    width: 50%;
    height: 50%;
    font-size: 1em;
    font-weight: bold;
    color: white;
    background-color: skyblue;
    border-radius: 2em;
  }
`;
const ScheduleDetail1 = styled.div`
  padding: 1.5em;
`;
const ScheduleDetail2 = styled.div`
  padding: 1.5em;

  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;

export {
  ScheduleDetailWrapper,
  ScheduleDetailHeader,
  ScheduleDetailTitle,
  ScheduleDetailContent,
  ScheduleDetailLeftWrapper,
  ScheduleDetailRightWrapper,
  ScheduleDetailImage,
  ScheduleDetailButton,
  ScheduleDetail1,
  ScheduleDetail2,
};
