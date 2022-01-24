import styled from 'styled-components';
import { blockColor, device, pointColor } from '../../styles/variables';

const innerDiv = styled.div`
  height: 100%;
`;

const ImgTag = styled.img`
  object-fit: cover;
  height: 99.5%;
  width: 100%;
  border-radius: 30px;
  border: 2px solid white;
`;

const size = {
  MobileLandscape: '480px',
  TabletPortrait: '768px',
  TabletLandscape: '992px',
  Laptops: '1200px',
};

const LoginSignupBlock = styled.div`
  //border: 1px solid red;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 60vh;
  margin-right: 60vh;
  background-color: white;
  height: 90vh;
  max-height: 100%;
  border-radius: 30px;
  text-align: center;
  /* width: 100vw; */
  @media ${device.TabletPortrait} {
    width: 100%;
    border-radius: 0px;
  }
`;

const InFormBlock = styled.div`
  max-width: 800px;
  width: 70%;
  height: 78.5vh;
  background-color: ${blockColor};
  border-radius: 10px;
  color: black;
  overflow-y: auto;
  @media ${device.TabletPortrait} {
    width: 100%;
    border-radius: 0px;
  }
`;

const ScheduleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export { innerDiv, ImgTag, LoginSignupBlock, InFormBlock, ScheduleWrapper };
