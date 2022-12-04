import styled from "styled-components";
import { motion } from "framer-motion";
export const Container = styled(motion.div)`
width: 30rem;
  height: 18rem;
  padding: 1rem;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;;
  gap: 10px;
position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important; 
  @media (max-width: 540px) {
    transform: scale(0.8);
  }
  @media (max-width: 425px) {
    width: 24rem;
  }
`;
export const Title = styled(motion.h1)`
  text-transform: uppercase;
  font-weight: bold;
  color: #282121;
  font-size: 1.4rem;
`;
export const Button = styled(motion.button)<{
  bg?: string;
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
  color: ${({ color }) => (color ? color : "white")};
  background-color: ${({ bg }) => bg};
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.6s;
`;
export const ButtonWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const EmailContent = styled(motion.span)`
  color: #f20505;
  text-transform: uppercase;
  background-color:rgba(0, 0, 0, 0.24) ;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 1rem;
  border-radius: 5px;
`;
export const PerfilImg = styled(motion.img)`
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;
