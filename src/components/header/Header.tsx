import React from "react";
import header from "../../../public/Header.png";
import Image from "next/image";
import { Container, ImgContent } from "./style";
export default function Header() {
  return (
    <Container>
      <ImgContent>
        <Image src={header} />
      </ImgContent>
    </Container>
  );
}
