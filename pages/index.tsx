import type { NextPage } from "next";
import NextHead from "../src/components/nextHead";
import Image from "next/image";
import { Container } from "../styles/pages/Home";
import Header from "../src/components/header/Header";
import { usePrismicDocuments } from "@prismicio/react";

const Home: NextPage = () => {
  const [documents] = usePrismicDocuments();
  console.log(documents);
  return (
    <Container>
      <NextHead title="deveando" />
      <Header />
    </Container>
  );
};

export default Home;
