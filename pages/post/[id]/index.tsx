import React from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { useSelector } from "react-redux";
import {
  Container,
  HeadContainer,
  PostContainer,
  LikeComponent,
} from "../../../styles/pages/Post";
import Post from "../../../src/Patterns/post/Post";
import Header from "../../../src/components/header/Header";
import { RegisterModal } from "../../../src/components/RegisterModal";
import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme/theme";
import { Heart } from "phosphor-react";
import { useState } from "react";
const OpenPost: NextPage = () => {
  const router = useRouter();
  const [isliked, setIsLiked] = useState<boolean>(false);
  const { id } = router.query;
  const { description, img, title } = useSelector(
    (state: any) => state.blogInfo
  );
  const { isOn } = useSelector((state: any) => state.themeSwitcher);

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
          <LikeComponent>
            <Heart
              onClick={() => setIsLiked((old) => !old)}
              color="red"
              weight={isliked ? "fill" : "regular"}
              size={30}
            />
          </LikeComponent>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default OpenPost;
