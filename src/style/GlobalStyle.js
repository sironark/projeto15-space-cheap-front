import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'pixel-art';
  src: url('../fonts/arcadeclassic/ARCADECLASSIC.TTF') format('truetype');
  font-weight: normal;
  font-style: normal;
  color: #ffffff;
}
body{
  background-image: url("https://i.imgur.com/MP8glav.png");
  height:100vh;
  width: 100%;
  background-position:center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

padding-left {
  font-family: "pixel-art";
}

`;

export default GlobalStyle;
