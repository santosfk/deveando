import React from "react";
import { Container } from "./style";
type Props = {
  size: string;
  title: string;
  img: string;
};
export default function Post({ size, title, img }: Props) {
  return (
    <Container size={size}>
      <h1>{title}</h1>
    </Container>
  );
}
