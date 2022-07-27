import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::selection {
    background: rgba(122, 122, 122, 0.6);
  }

  body {
    font-family: 'Montserrat', 'Roboto', Sans-Serif;
    line-height: 1.5;
    color: ${props => props.theme.clr_text};
    background-color: ${props => props.theme.clr_background};
  }
`

export default GlobalStyle;