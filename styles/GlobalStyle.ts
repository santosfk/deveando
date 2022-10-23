import { createGlobalStyle } from "styled-components";
import { keyframes } from "styled-components";
const backgroundAnimation = keyframes`
 
 0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}

`;
export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    .swiper-pagination-bullet {
 
    background-color: red !important;
  }
  .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after {
    color: red !important;
  }
  .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after{
    color: red !important;
  }

    background: linear-gradient(358deg, #010030, #52b9b3);
    /* background-image: linear-gradient(0deg,#010030,#52b9b3,#010030,#52b9b3); */
    background-size: 400% 400%;
    animation: ${backgroundAnimation} 20s ease infinite;
    background-repeat:no-repeat;
    font-family: Roboto, sans-serif;
    height: 100%;
    width: 100%;
  }`;
