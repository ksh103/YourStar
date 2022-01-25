import styled from 'styled-components';
import { blockColor, device } from '../../styles/variables';
const AdminWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AdminBlock = styled.div`
  max-width: 1200px;
  width: 70%;
  height: 75vh;
  background-color: ${blockColor};
  border-radius: 10px;
  color: black;
  @media ${device.TabletPortrait} {
    width: 100%;
    border-radius: 0px;
  }
`;

export { AdminWrapper, AdminBlock };
