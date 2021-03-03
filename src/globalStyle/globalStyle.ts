import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'); */

  body {
    margin: 0;
    padding: 0;
    background: #FAFAFA;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  body, input,button, select {
    font-family: 'Poppins'
  }
`;

export default GlobalStyle;