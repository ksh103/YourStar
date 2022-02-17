import styled from 'styled-components';
import { device } from '../../../styles/variables';
const MainPosterWrapper = styled.div`
  padding: 10%;
  padding-top: 20px;
  padding-bottom: 5%;
`;

const MainPosterCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 10%;
  img {
    width: 20vw;
    height: 20vw;
    object-fit: cover;
    border-radius: 50%;
    @media ${device.TabletPortrait} {
      width: 60vw;
      height: 60vw;
    }
    background-color: gray;
  }
`;
export { MainPosterWrapper, MainPosterCard };
