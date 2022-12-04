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

  return (
    <Container>
      <NextHead title="deveando" />
      <Header />
      <HomePosts />
          <RegisterModal
        
          />
   
    </Container>
  );
};

export default Home;
