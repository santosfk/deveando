import styled from "styled-components";
import Image from "next/image";
export const Container = styled.div<{
  size: string;
}>`
  width: ${({ size }) => (size === "bg" ? "1000px" : "300px")};
  height: ${({ size }) => (size === "bg" ? "390px" : "200px")};
  position: relative;
  transition: 0.5s;
  :hover {
    width: ${({ size }) => (size === "bg" ? "1010px" : "310px")};
    height: ${({ size }) => (size === "bg" ? "400px" : "210px")};
  }
  @media (max-width: 1024px) {
    width: ${({ size }) => (size === "bg" ? "900px" : "300px")};
  }
  @media (max-width: 991px){
    width: ${({ size }) => (size === "bg" ? "700px" : "300px")};
  }
  @media (max-width: 540px){
    width: ${({ size }) => (size === "bg" ? "400px" : "300px")};
    height: ${({ size }) => (size === "bg" ? "250px" : "200px")};
  }
  @media (max-width: 375px){
    width: ${({ size }) => (size === "bg" ? "270px" : "270px")};
    height: ${({ size }) => (size === "bg" ? "150px" : "150px")};
  }
`;
export const Title = styled.h1<{
  size: string;
}>`
  position: absolute;
  z-index: 2;
  bottom: 0;
  background: rgba(1, 0, 48, 0.52);
  width: 100%;
  color: white;
  text-align: left;
  padding: 0 3rem;
  height: ${({ size }) => (size === "bg" ? "3rem" : "2rem")};
  font-size: ${({ size }) => (size === "bg" ? "2rem" : "1.5rem")};
  border-radius: 0px 0px 19.8396px 19.8396px;
  @media (max-width: 375px){
    font-size: ${({ size }) => (size === "bg" ? "1.5rem" : "1.5rem")};
  }
`;
export const ImageContent = styled.img<{
  size: string;
}>`
  width: 100%;
  height: 100%;
  border-radius: 1.2rem;
  object-fit: cover;
  transition: 0.5s;
`;
