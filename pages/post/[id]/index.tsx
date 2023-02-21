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
import { motion } from "framer-motion";
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
          <LikeComponent
            initial={{ width: "150px" }}
            animate={{ width: "300px" }}
            transition={{
              type: "spring",
              duration: 3,
              stiffness: 260,
              damping: 20,
            }}
          >
            <motion.span
              whileHover={{ scale: 1.2, y: -10 }}
              whileTap={{
                scale: 0.3,
                borderRadius: "100%",
              }}
            >
              <Heart
                onClick={() => setIsLiked((old) => !old)}
                color={isliked ? "black" : "red"}
                weight="fill"
                size={30}
              />
            </motion.span>
          </LikeComponent>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default OpenPost;
