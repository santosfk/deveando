import React, { useState } from "react";
import header from "../../../public/Header.png";
import Image from "next/image";
import { Container, ImgContent, IconWrapper } from "./style";
import { UserCircle } from "phosphor-react";
import { EmailModal } from "../EmailModal";
import Link from "next/link";
export default function Header() {
  const [modalOn, setModalOn] = useState<Boolean>(false);
  return (
    <>
      {modalOn && <EmailModal setModalOn={setModalOn} />}

      <Container>
        <ImgContent>
          <Link href="/">
            <Image src={header} />
          </Link>
        </ImgContent>
        <IconWrapper>
          <UserCircle
            size={32}
            weight="fill"
            className="icon"
            onClick={() => setModalOn(true)}
          />
        </IconWrapper>
      </Container>
    </>
  );
}
