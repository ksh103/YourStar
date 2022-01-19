import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  body {

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
`;
export default GlobalStyle;
