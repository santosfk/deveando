import React, { useState } from "react";
import header from "../../../public/Header.png";
import Image from "next/image";
import { Container, ImgContent } from "./style";
import Link from "next/link";
import { UserFocus } from "phosphor-react";

import { getSession, useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { AnimatePresence } from "framer-motion";

import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/themeSwitcher";

export default function Header() {
  const dispatch = useDispatch();

  const handleModalIsOpen = () => {
    dispatch(setTheme());
  };

  return (
    <Container>
      <ImgContent>
        <Link href="/">
          <Image src={header} />
        </Link>
      </ImgContent>
      <UserFocus
        className="user-icon"
        size={42}
        weight="fill"
        onClick={handleModalIsOpen}
      />
    </Container>
  );
}
