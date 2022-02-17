import styled from 'styled-components';
import space from '../../../assets/images/space.jpg';

const BackgroundDiv = styled.div`
  height: 100vh;
  background-color: ${props => (props.bgToggle === '1' ? props.color : 'none')};
  background-image: ${props =>
    props.bgToggle === '0' ? `url(${space})` : 'none'};
  background-size: cover;
`;

export { BackgroundDiv };
