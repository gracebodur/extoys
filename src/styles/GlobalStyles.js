import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }

  body {
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    height: 100%;
    margin: 0;
    background-color: #feb300;
  }
`;

export { GlobalStyle }