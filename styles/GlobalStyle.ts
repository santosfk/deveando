import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: linear-gradient(180deg, #010030 0%, #7ae8e1 123.83%);
    font: 400 16px Roboto, sans-serif;
    height: 100%;
    width: 100%;
  }`;
