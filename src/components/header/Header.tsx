import React, { useState } from "react";
import header from "../../../public/Header.png";
import Image from "next/image";
import { Container, ImgContent } from "./style";
import Link from "next/link";
import { UserFocus } from "phosphor-react";
import { RegisterModal } from "../RegisterModal";
import { getSession, useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
export default function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, scale: 0.3 },
  };

  return (
    <Container>
      <ImgContent>
        <motion.div
          className="modal-wrapper"
          variants={variants}
          animate={modalIsOpen ? "open" : "closed"}
        >
          <RegisterModal
            setModalIsOpen={setModalIsOpen}
            modalIsOpen={modalIsOpen}
          />
        </motion.div>

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
