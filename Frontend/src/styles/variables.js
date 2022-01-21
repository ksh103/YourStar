import styled from 'styled-components';

// Values

// Colors

export const blockColor = '#F2F4F5'; // 연한 그레이
export const pointColor = '#FF5455';

export const primaryColor = 'black';
export const secondaryColor = 'white';

// 각 테마별 배경색과 글씨색
export const roomColor = {
  white: { background: 'white', color: 'black' },
  green: { background: '#D8FFD8', color: 'black' },
  blue: { background: '#D8F1FF', color: 'black' },
  pink: { background: '#FFD8FB', color: 'black' },
  red: { background: '#FFDAD8', color: 'black' },
  yellow: { background: '#EFF8BD', color: 'black' },
  purplue: { background: '#E2D8FF', color: 'black' },
  black: { background: 'black', color: 'white' },
};

// Media query breakpoints

const size = {
  MobileLandscape: '480px',
  TabletPortrait: '768px',
  TabletLandscape: '992px',
  Laptops: '1200px',
};

export const device = {
  MobileLandscape: `(max-width: ${size.MobileLandscape})`,
  TabletPortrait: `(max-width: ${size.TabletPortrait})`,
  TabletLandscape: `(max-width: ${size.TabletLandscape})`,
  Laptops: `(max-width: ${size.Laptops})`,
};

// Layout components

export const Layout = styled.div``;

export const Block = styled.div`
  //border: 1px solid red;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 25vh;
  margin-right: 25vh;
  background-color: white;
  height: 90vh;
  max-height: 100%;
  border-radius: 30px;
  text-align: center;
  box-shadow: 5px 5px 5px 5px gray;
  /* width: 100vw; */
  @media ${device.MobileLandscape} {
  }
`;

