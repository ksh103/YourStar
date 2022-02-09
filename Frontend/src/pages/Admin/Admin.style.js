import styled from 'styled-components';
import { device } from '../../styles/variables';

const AdminHeader = styled.div`
  height: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  font-weight: bold;
  & > div {
    margin: 10px;
    cursor: pointer;
  }
  .menu1 {
    color: ${props => (props.menu === 1 ? 'black' : 'gray')};
  }
  .menu2 {
    color: ${props => (props.menu === 2 ? 'black' : 'gray')};
  }
`;
const AdminContent = styled.div`
  height: 88%;
  #admin {
    height: 100%;
    margin: 0 10px;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    @media ${device.TabletPortrait} {
      margin: 0;
    }
  }
`;

export {
  // AdminBlock,
  // Icon,
  // AdminWrapper,
  // Title,
  // Image,
  // Section1,
  // Section2,
  AdminHeader,
  AdminContent,
};
