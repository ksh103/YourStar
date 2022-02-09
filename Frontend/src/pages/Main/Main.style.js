import styled from 'styled-components';
import { blockColor, device, pointColor } from '../../styles/variables';
import space from '../../assets/images/space.jpg';
const MainSection = styled.div`
  color: ${blockColor};
  text-align: center;
  .one {
    font-size: 2.4em;
    font-weight: bold;
    margin-bottom: 20px;
    padding-top: '200px';
    padding-bottom: '200px';
    background: '#f0f0f0';
    text-align: 'center';
  }
  .two {
    font-size: 1.5em;
  }
`;
const MainButton = styled.div`
  padding: 3em;

  button {
    background-color: ${blockColor};
    height: 40px;
    width: 120px;
    border-radius: 5px;
    font-size: 1.2em;

    &:hover {
      color: white;
      background: ${pointColor};
       {
        animation: 0.6s ease-in-out loadEffect3;
      }

      @keyframes loadEffect3 {
        0% {
          opacity: 0;
          transform: scale(0.7);
        }
        65% {
          opacity: 0.65;
          transform: scale(1.01);
        }
        85% {
          opacity: 0.85;
          transform: scale(0.97);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
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
