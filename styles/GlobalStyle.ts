import { createGlobalStyle } from "styled-components";
import { keyframes } from 'styled-components'
const backgroundAnimation = keyframes `
 
  0% { background-position: 0% 100%; }
  100% { background-position: 0% 0%; }

`
export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {

    background: linear-gradient(358deg, #010030, #52b9b3);
    background-image: linear-gradient(0deg,#010030,#52b9b3,#010030,#52b9b3);
    background-size: 100% 300%;
    animation: ${backgroundAnimation} 20s ease infinite;
    background-repeat:no-repeat;
    font-family: Roboto, sans-serif;
    height: 100%;
    width: 100%;
  }`;
