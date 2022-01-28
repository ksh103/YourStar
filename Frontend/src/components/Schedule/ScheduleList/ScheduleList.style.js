import styled from 'styled-components';
import { pointColor } from '../../../styles/variables';
const ScheduleCardRow = styled.div`
  display: flex;
  justify-content: center;
`;
const ScheduleCardBlock = styled.div`
  margin: 15px 0;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;
const ScheduleCardImage = styled.div`
  width: 50%;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
  background-color: gray;
  img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: cover;
    &:hover {
      transform: scale(1.2);
      transition: 0.5s;
    }
  }
`;

const ScheduleCardContent = styled.div`
  width: 45%;
  margin: 10px;
  color: black;
  #title {
    font-size: 1.3em;
    font-weight: bold;
    margin-bottom: 7px;
    cursor: pointer;
    &:hover {
      color: ${pointColor};
    }
  }
  #date {
    font-size: 1em;
    color: gray;
  }
`;

export {
  ScheduleCardBlock,
  ScheduleCardRow,
  ScheduleCardImage,
  ScheduleCardContent,
};
