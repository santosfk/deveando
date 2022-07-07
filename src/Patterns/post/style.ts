import styled from "styled-components";
export const Container = styled.div<{
  size: string;
}>`
  width: ${({ size }) => (size === "bg" ? "600px" : "400px")};
  background-color: white;
`;

export const ImageContent = styled.div``;
