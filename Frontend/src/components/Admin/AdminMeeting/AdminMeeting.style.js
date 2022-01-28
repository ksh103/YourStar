import styled from 'styled-components';
import { device, pointColor } from '../../../styles/variables';

const AdminMeetingApproveButton = styled.button`
  background-color: ${props => (props.color === 0 ? 'lightpink' : 'lightblue')};
  width: 60px;
  border-radius: 10px; ;
`;
const AdminMeetingDetailFooter = styled.div`
  text-align: center;
  button {
    width: 100px;
    height: 40px;
    background-color: ${props => (props.color === 0 ? pointColor : 'gray')};
    border-radius: 10px;
    color: white;
    margin: 10px;
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
