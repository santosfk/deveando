import React from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { useSelector } from "react-redux";
import {
  Container,
  HeadContainer,
  PostContainer,
} from "../../../styles/pages/Post";
import Post from "../../../src/Patterns/post/Post";
import Header from "../../../src/components/header/Header";
import { RegisterModal } from "../../../src/components/RegisterModal";
const OpenPost: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { description, img, title } = useSelector(
    (state: any) => state.blogInfo
  );
  return (
    <>
      <Container>
        <HeadContainer>
          <Header />
        </HeadContainer>
        <PostContainer>
          <Post size="bg" title={title} img={img} description="" />
        </PostContainer>
        <span>{description}</span>
        <RegisterModal />
      </Container>
    </>
  );
};
export default OpenPost;
