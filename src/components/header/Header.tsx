import React,{useState} from "react";
import header from "../../../public/Header.png";
import Image from "next/image";
import { Container, ImgContent } from "./style";
import Link from "next/link";
import {UserFocus} from "phosphor-react"
import { RegisterModal } from "../RegisterModal";
import { getSession, useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
export default function Header() {
  const [modalIsOpen,setModalIsOpen] = useState(false)
  const handleModalIsOpen = () =>{
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <Container>
      {modalIsOpen && <RegisterModal setModalIsOpen = {setModalIsOpen}/>}
      <ImgContent>
        <Link href="/">
          <Image src={header} />
        </Link>
      </ImgContent>
          <UserFocus className="user-icon" size={42} weight="fill" onClick={handleModalIsOpen} />
    </Container>
  );
}

