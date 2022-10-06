import styled from "styled-components";
import { motion } from "framer-motion";
export const Container = styled.div`
  width: 30rem;
  height: 18rem;
  background-color: white;
  position: absolute;
  border-radius: 5px;
  z-index: 4;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: 1px solid #3cb57a;
  @media (max-width: 2000px) {
    left: 30rem;
  }
  @media (max-width: 1280px) {
    left: 25rem;
  }
  @media (max-width: 1024px) {
    left: 16rem;
  }
  @media (max-width: 991px) {
    left: 12rem;
  }
  @media (max-width: 820px) {
    left: 9rem;
  }
  @media (max-width: 768px) {
    left: 6rem;
  }
  @media (max-width: 540px) {
    left: 0;
    transform: scale(0.8);
  }
  @media (max-width: 425px) {
    width: 24rem;
    margin-left: -1.5rem;
  }
  @media (max-width: 395px) {
    margin-left: -2.2rem;
  }
  @media (max-width: 375px) {
    margin-left: -2.6rem;
  }
  @media (max-width: 320px) {
    margin-left: -5rem;
  }
`;
export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: bold;
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
    color: #111111;
  }
`;
export const LoggedContainer = styled.div`
  width: 32rem;
  height: 22rem;
  background-color: white;
  position: absolute;
  border-radius: 5px;
  z-index: 4;
  left: 50%;
  top: 50%;
  transform: translate(0, 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  .close-icon {
    margin-right: -29rem;
    margin-top: -3rem;
    cursor: pointer;
    color: black;
    transition: 0.5s;
  }
  .close-icon:hover {
    color: #d61e2d;
  }
  span {
    text-align: center;
    font-size: 0.7rem;
    color: #3cb57a;
    width: 300px;
  }
  @media (max-width: 2000px) {
    left: 30rem;
  }
  @media (max-width: 1280px) {
    left: 25rem;
  }
  @media (max-width: 1024px) {
    left: 16rem;
  }
  @media (max-width: 991px) {
    left: 12rem;
  }
  @media (max-width: 820px) {
    left: 9rem;
  }
  @media (max-width: 768px) {
    left: 6rem;
  }
  @media (max-width: 540px) {
    left: 0;
    transform: scale(0.8);
  }
  @media (max-width: 425px) {
    width: 24rem;
    margin-left: -1.5rem;
  }
  @media (max-width: 395px) {
    margin-left: -2.2rem;
  }
  @media (max-width: 375px) {
    margin-left: -2.6rem;
    .close-icon {
      margin-right: -20rem;
    }
  }
  @media (max-width: 320px) {
    margin-left: -5rem;
  }
`;
export const PerfilImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid black;
  outline: 2px solid #3cb57a;
`;
