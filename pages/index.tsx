import type { NextPage } from "next";
import NextHead from "../src/components/nextHead";
import Image from "next/image";
import { Container } from "../styles/pages/Home";
import Header from "../src/components/header/Header";
import HomePosts from "../src/components/HomePosts";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { RegisterModal } from "../src/components/RegisterModal";

const Home: NextPage = () => {
  const {isOn} = useSelector(
    (state: any) => state.modalSlice
  );
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, scale: 0.3 },
  };
  return (
    <Container>
      <NextHead title="deveando" />
      <Header />
      <HomePosts />
      <motion.div
          className="modal-wrapper"
          variants={variants}
          animate={isOn ? "open" : "closed"}
        >
          <RegisterModal
        
          />
        </motion.div>
    </Container>
  );
};

export default Home;
