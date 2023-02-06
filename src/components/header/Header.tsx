import React, { useState } from "react";
import header from "../../../public/Header.png";
import Image from "next/image";
import { Container, ImgContent } from "./style";
import Link from "next/link";
import { UserFocus, Moon, Sun } from "phosphor-react";

import { getSession, useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { AnimatePresence } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/themeSwitcher";

export default function Header() {
  const dispatch = useDispatch();

  const handleModalIsOpen = () => {
    dispatch(setTheme());
  };
  const { isOn } = useSelector((state: any) => state.themeSwitcher);
  return (
    <Container>
      <ImgContent>
        <Link href="/">
          <Image src={header} />
        </Link>
      </ImgContent>
      <div onClick={handleModalIsOpen}>
        {isOn ? (
          <Sun size={32} color="#cccc00" weight="fill" />
        ) : (
          <Moon size={32} weight="fill" color="#d3d3d3" />
        )}
      </div>

      {/* <UserFocus
        className="user-icon"
        size={42}
        weight="fill"
        
      /> */}
    </Container>
  );
}
