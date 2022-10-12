import styled from "styled-components";
import { motion } from "framer-motion";
export const Container = styled.div`
width:30rem;
  height: 18rem;
  background-color: #010030;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: 1px solid #3cb57a;
 span{
  color: #7ae8e1;
  text-transform: uppercase;
  font-size: .8rem;
  font-weight: 400;
 }
  @media (max-width: 540px) {
    transform: scale(0.8);
  }
  @media (max-width: 425px) {
    width: 24rem;

  }
`;
export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: bold;
  color: #edece6;
  font-size: 1.4rem;

`;
export const Button = styled.button<{
  color?: string;
}>`
  width: 220px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  font-weight: bold;
  color: #edece6;
  background-color: ${({ color }) => color};
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.6s;
  :hover {
    color: ${({color})=> (color === 'transparent')? 'red':"#010030"} ;
  }
`;
export const LoggedContainer = styled.div`
width: 30rem;
  height: 20rem;
  background-color: #010030;
  border: 1px solid #3cb57a;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  h1{
    color: #edece6;
    text-transform: uppercase;
    font-size: 1.3rem;
  }
  .close-icon {
    margin-right: -27rem;
    /* margin-top: -3rem; */
    cursor: pointer;
    color: #d61e2d;
    transition: 0.5s;
  }
  .close-icon:hover {
    color: #DE2D1D;
  }
  span {
    text-align: center;
    font-size: 0.7rem;
    color: #edece6;
    font-weight: 600;
    width: 300px;
  }
  span>p{
    font-weight: bold;
    font-size: 1.2rem;
    color: #7ae8e1;
  }

  @media (max-width: 540px) {
    left: 0;
    transform: scale(0.8);
  }
  @media (max-width: 425px) {
    width: 24rem;
    .close-icon{
      margin-right: -22rem;
    }
  }
`;
export const PerfilImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid black;
  outline: 2px solid #7ae8e1;
`;
