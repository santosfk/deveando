import type { NextPage } from "next";
import NextHead from "../src/components/nextHead";
import Image from "next/image";
import { Container } from "../styles/pages/Home";

const Home: NextPage = () => {
  return (
    <Container>
      <NextHead title="deveando" />
      <h2>blogão</h2>
    </Container>
  );
};

export default Home;
