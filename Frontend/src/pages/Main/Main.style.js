import styled from 'styled-components';
import { blockColor, device } from '../../styles/variables';
import space from '../../assets/images/space.jpg';

const MainSection = styled.div`
  color: ${blockColor};
  text-align: center;
  .one {
    font-size: 1.6em;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .two {
    font-size: 1em;
  }
`;
const MainButton = styled.div`
  padding: 3em;

  button {
    background-color: ${blockColor};
    height: 40px;
    width: 100px;
    border-radius: 5px;
    font-size: 1em;
  }
`;
const MainWrapper = styled.div`
  background-image: url(${space});
  position: relative;
  min-height: 600px;
  background-size: cover;
  @media ${device.TabletPortrait} {
    background: none;
  }
`;
export { MainSection, MainButton, MainWrapper };
