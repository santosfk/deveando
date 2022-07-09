import styled from "styled-components";
import Image from "next/image";
export const Container = styled.div<{
  size: string;
}>`
  width: ${({ size }) => (size === "bg" ? "1000px" : "300px")};
  height: ${({ size }) => (size === "bg" ? "390px" : "200px")};
  position: relative;
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
    width: 102%;
    height: 102%;
  }
`;
