import styled from "styled-components";
import Image from "next/image";
export const Container = styled.div<{
  size: string;
}>`
  cursor: pointer;
  width: ${({ size }) => (size === "bg" ? "1000px" : "300px")};
  height: ${({ size }) => (size === "bg" ? "390px" : "200px")};
  position: relative;
  transition: 0.5s;

  @media (max-width: 1024px) {
    width: ${({ size }) => (size === "bg" ? "900px" : "300px")};
  }
  @media (max-width: 991px) {
    width: ${({ size }) => (size === "bg" ? "700px" : "300px")};
  }
  @media (max-width: 540px) {
    width: ${({ size }) => (size === "bg" ? "400px" : "300px")};
    height: ${({ size }) => (size === "bg" ? "250px" : "200px")};
  }
  @media (max-width: 395px) {
    width: ${({ size }) => (size === "bg" ? "320px" : "300px")};
  }
  @media (max-width: 375px) {
    width: ${({ size }) => (size === "bg" ? "290px" : "270px")};
    height: ${({ size }) => (size === "bg" ? "150px" : "150px")};
  }
`;
export const Title = styled.h1<{
  size: string;
}>`
  position: absolute;
  text-transform: uppercase;
  z-index: 2;
  bottom: 0;
  background: rgba(1, 0, 48, 0.52);
  width: 100%;
  color: white;
  text-align: left;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: ${({ size }) => (size === "bg" ? "2.5rem" : "2rem")};
  font-size: ${({ size }) => (size === "bg" ? "1.7rem" : "1.2rem")};
  border-radius: 0px 0px 19.8396px 19.8396px;
  @media (max-width: 375px) {
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
  :hover {
    transform: scale(1.01);
  }
`;
