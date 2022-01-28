import styled from 'styled-components';
import { device } from '../../styles/variables';

const FooterBlock = styled.div`
  display: flex;
  font-size: 10px;
  color: gray;
  height: 10%;
  justify-content: center;
  align-items: center;
  @media ${device.TabletPortrait} {
  }
`;

export { FooterBlock };
