import React from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { Container, HeaderContainer } from "../../../styles/pages/Post";
import Post from "../../../src/Patterns/post/Post";
import Header from "../../../src/components/Header/Header";
const OpenPost: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { description, img, title } = useSelector(
    (state: any) => state.blogInfo
  );
  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Post size="bg" title={title} img={img} description="" />
      <span>{description}</span>
    </Container>
  );
};
export default OpenPost;
