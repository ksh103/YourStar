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
    @media ${device.TabletPortrait} {
      margin: 0;
    }
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
  div {
    color: white;
    max-width: 250px;
    width: 50%;
    height: 50%;
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => {
      if (props.color === '1') {
        return {
          backgroundColor: 'lightblue',
          color: 'white',
          cursor: 'pointer',
        };
      } else if (props.color === '2') {
        return {
          backgroundColor: 'lightpink',
          color: 'white',
          cursor: 'pointer',
        };
      } else if (props.color === '3') {
        return {
          backgroundColor: pointColor,
          color: 'white',
          cursor: 'pointer',
        };
      } else {
        return { backgroundColor: 'lightgray', color: 'gray' };
      }
    }};
  }
`;
const ScheduleDetail1 = styled.div`
  margin: 1.5em;
`;
const ScheduleDetail2 = styled.div`
  margin: 1.5em;
  padding: 1.5em 0;

  border-top: 1.5px solid gray;
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
