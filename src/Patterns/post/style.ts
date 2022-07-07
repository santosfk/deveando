import styled from "styled-components";
import Image from "next/image";
export const Container = styled.div<{
  size: string;
}>`
  width: ${({ size }) => (size === "bg" ? "1000px" : "300px")};
  height: 250px;
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
  height: 3rem;
  border-radius: 6rem;
`;
export const ImageContent = styled.img<{
  size: string;
}>`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
`;
