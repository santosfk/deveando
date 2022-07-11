import React from "react";
import header from "../../../public/Header.png";
import Image from "next/image";
import { Container, ImgContent } from "./style";
import Link from "next/link";
export default function Header() {
  return (
    <Container>
      <ImgContent>
        <Link href="/">
          <Image src={header} />
        </Link>
      </ImgContent>
    </Container>
  );
}
