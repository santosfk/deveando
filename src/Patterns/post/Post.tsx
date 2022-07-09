import Image from "next/image";
import React from "react";
import { Container, Title, ImageContent } from "./style";

type Props = {
  size: string;
  title: string;
  img: string;
};
export default function Post({ size, title, img }: Props) {
  return (
    <Container size={size}>
      <Title size={size}>{title}</Title>

      <ImageContent
        size={size}
        src={img}
        style={{
          position: "absolute",
        }}
        alt=""
      />
    </Container>
  );
}
