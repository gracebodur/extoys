import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'PT Sans', sans-serif;
    height: 100%;
    margin: 0;
    background-color: #F7B832;
  }

  h1, h2, h3 {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
    line-height: 1;
}
`;

export { GlobalStyle };
