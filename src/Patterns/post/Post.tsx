import Image from "next/image";
import React from "react";
import { Container, ImageContent } from "./style";

type Props = {
  size: string;
  title: string;
  img: string;
};
export default function Post({ size, title, img }: Props) {
  return (
    <Container size={size}>
      <h1>{title}</h1>
      <ImageContent>
        <Image src={img} width={30} height={30} alt="" />
      </ImageContent>
    </Container>
  );
}
