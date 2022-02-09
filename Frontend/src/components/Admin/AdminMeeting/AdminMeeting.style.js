import styled from 'styled-components';
import { device, pointColor } from '../../../styles/variables';

const AdminMeetingApproveButton = styled.div`
  background-color: ${props => (props.color === 0 ? 'lightpink' : 'lightblue')};
  width: 60px;
  border-radius: 10px;
  text-align: center;
`;
const AdminMeetingDetailFooter = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  & > div {
    width: 100px;
    height: 40px;
    ${props => {
      if (props.color === '1') {
        return { backgroundColor: 'lightgray', color: 'gray' };
      } else {
        return {
          backgroundColor: pointColor,
          color: 'white',
          cursor: 'pointer',
        };
      }
    }};
    border-radius: 10px;
    margin: 10px;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;
const AdminMeetindDetailHeader = styled.div`
  height: 12%;
  margin: 0 1.5em;
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
    margin-left: 3em;
    @media ${device.TabletPortrait} {
      font-size: 1.1em;
      margin-left: 1em;
    }
  }
`;
const AdminMeetingDetailContent = styled.div`
  height: 88%;
  #detail {
    height: 100%;
    margin: 0 10px;
    overflow-y: auto;
    @media ${device.TabletPortrait} {
      margin: 0;
    }
  }
  #detail #detail2 {
    display: flex;
    justify-content: center;
  }
`;
export {
  AdminMeetingDetailFooter,
  AdminMeetingApproveButton,
  AdminMeetindDetailHeader,
  AdminMeetingDetailContent,
};
