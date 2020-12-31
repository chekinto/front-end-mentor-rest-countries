import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, 
  *::before,
  *::after {
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
  }

  html {
    --max-width: 1280px;
  }

  body {
    font-family: 'Arial';
    scroll-behavior: smooth;
  }
`;