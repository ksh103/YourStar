import styled from 'styled-components';
import { device } from '../../styles/variables';

const FooterBlock = styled.div`
  display: flex;
  font-size: 18px;
  color: gray;
  height: 10vh;
  justify-content: center;
  align-items: center;
  @media ${device.TabletPortrait} {
  }
`;

export { FooterBlock };
