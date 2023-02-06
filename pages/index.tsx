import type { NextPage } from "next";
import NextHead from "../src/components/nextHead";
import Image from "next/image";
import { Container } from "../styles/pages/Home";
import Header from "../src/components/header/Header";
import HomePosts from "../src/components/HomePosts";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { RegisterModal } from "../src/components/RegisterModal";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme/theme";

const Home: NextPage = () => {
  const { isOn } = useSelector((state: any) => state.themeSwitcher);
  console.log(isOn);
  return (
    <ThemeProvider theme={isOn ? theme.white : theme.dark}>
      <Container>
        <NextHead title="deveando" />
        <Header />
        <HomePosts />
      </Container>
    </ThemeProvider>
  );
};

export default Home;
