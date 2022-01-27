import styled from 'styled-components';
import { roomColor } from '../../../styles/variables';

const BackgroundDiv = styled.div`
  height: 100vh;
  background-color: ${props => props.color};
`;

export { BackgroundDiv };
