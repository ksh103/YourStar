import { createGlobalStyle } from 'styled-components';
import space from '../assets/images/space.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    /* background-image: url(${space}); */
    min-width: 480px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: black;
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
export default GlobalStyle;
