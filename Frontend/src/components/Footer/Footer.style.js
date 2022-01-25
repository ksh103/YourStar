import styled from 'styled-components';
import { device } from '../../styles/variables';

const FooterBlock = styled.div`
  text-align: center;
  font-size: small;
  color: gray;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 30px 0;

  @media ${device.TabletPortrait} {
    background-color: black;
  }
`;

export { FooterBlock };
