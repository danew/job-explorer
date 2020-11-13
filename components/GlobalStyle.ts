import { createGlobalStyle } from 'styled-components'

export const theme = {
  offwhite: '#f9f7f7',
  lightblue: '#dbe2ef',
  blue: '#3f72af',
  darkblue: '#112d4e',
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 100%;
  }
  body {
    font-family: sans-serif;
    background: ${theme.offwhite};
    color: ${theme.darkblue};
    padding: 0;
    margin: 0;
    font-size: 1rem;
  }
  img {
    max-width: 100%;
  }
  ul, ol {
    margin: 0;
    padding: 0;
  }
`