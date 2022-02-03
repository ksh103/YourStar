import { createGlobalStyle } from 'styled-components';
import space from '../assets/images/space.jpg';
const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${space});
  
    min-width: 480px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: black;
    width: 100%;    
    height: 100vh;
    background-size: cover;   
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
