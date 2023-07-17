import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'pixel-art';
  src: url('../fonts/arcadeclassic/ARCADECLASSIC.TTF') format('truetype');
  font-weight: normal;
  font-style: normal;
}
padding-left {
  font-family: "pixel-art";
}

`;

export default GlobalStyle;
