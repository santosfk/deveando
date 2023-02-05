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
import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme/theme";
const OpenPost: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { description, img, title } = useSelector(
    (state: any) => state.blogInfo
  );
  const { isOn } = useSelector((state: any) => state);
  return (
    <>
      <ThemeProvider theme={isOn ? theme.white : theme.dark}>
        <Container>
          <HeadContainer>
            <Header />
          </HeadContainer>
          <PostContainer>
            <Post size="bg" title={title} img={img} description="" />
          </PostContainer>
          <span>{description}</span>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default OpenPost;
