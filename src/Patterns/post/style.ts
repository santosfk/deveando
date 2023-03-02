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
  display: flex;
  flex-direction: column;

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
export const InfoWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 7px 3px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 10px 10px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1<{
  size: string;
}>`
  text-transform: uppercase;
  z-index: 2;
  bottom: 0;

  width: 100%;
  color: #02457a;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ size }) => (size === "bg" ? "1.7rem" : "1.2rem")};
  @media (max-width: 375px) {
    font-size: ${({ size }) => (size === "bg" ? "1.5rem" : "1.5rem")};
  }
`;
export const ImageContent = styled.img<{
  size: string;
}>`
  width: 100%;
  height: 100%;
  max-height: 300px;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
  transition: 0.5s;
`;
