import styled from 'styled-components';

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

export const device = {
  MobileLandscape: `(min-width: ${size.MobileLandscape})`,
  TabletPortrait: `(min-width: ${size.TabletPortrait})`,
  TabletLandscape: `(min-width: ${size.TabletLandscape})`,
  Laptops: `(min-width: ${size.Laptops})`,
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
  @media ${device.MobileLandscape} {
  }
`;

export { innerDiv, ImgTag, LoginSignupBlock };
