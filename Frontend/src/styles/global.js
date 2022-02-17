import { createGlobalStyle } from 'styled-components';
import space from '../assets/images/space.jpg';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return state;
};

const GlobalStyle = createGlobalStyle`
  body {
    min-width: 480px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: ${props =>
      props.MeetingRoom.backgroundColor}; // redux에 있는 color 값 받아와서 저장
    background-color: ${props =>
      props.MeetingRoom.bgToggle === '1'
        ? props.MeetingRoom.backgroundColor
        : 'none'};
    background-image: ${props =>
      props.MeetingRoom.bgToggle === '0' ? `url(${space})` : 'none'};
    width: 100%;    
    height: 100vh;
    background-size: cover;  
    font-family: 'MinSans-Medium';  // 전역 폰트
 
// 고딕 
@font-face {
    font-family: 'MinSans-Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/MinSans-Medium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
}

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }
`;

export default connect(mapStateToProps)(GlobalStyle);
