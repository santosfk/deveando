import type { NextPage } from "next";
import NextHead from "../src/components/nextHead";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NextHead title="deveando" />
      <h2>blogão</h2>
    </div>
  );
};

export default Home;
