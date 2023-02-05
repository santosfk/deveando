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
    height: 100%;
    .swiper-pagination-bullet {
 
    background-color: #A6034F !important;
  }
  .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after {
    color: #A6034F !important;
  }
  .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after{
    color: #A6034F !important;
  }

    background-color:#E9E9E9;
    font-family: Roboto, sans-serif;
    height: 100%;
    width: 100%;
  }`;
