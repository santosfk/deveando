import React, { useEffect } from "react";
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
import { getHearts, addHeart, updateHeart } from "../../api/heart";
import { Heart as IHeart } from "../../../src/types/heart";
import { useMutation, useQuery } from "react-query";
import { queryClient } from "../../api/queryClient";
const OpenPost: NextPage = () => {
  const router = useRouter();
  const [isliked, setIsLiked] = useState<boolean>(false);
  const [hearts, setHearts] = useState<IHeart>();
  const { id } = router.query;
  const { description, img, title } = useSelector(
    (state: any) => state.blogInfo
  );
  const { isOn } = useSelector((state: any) => state.themeSwitcher);
  const query = useQuery("getLikes", getHearts, {
    onSuccess(data) {
      data?.map((item) => {
        setHearts(item);
      });
    },
  });
  const mutation = useMutation((item: IHeart) => updateHeart(item), {
    onSuccess() {
      queryClient.invalidateQueries("getLikes");
    },
  });
  const handleAddLike = async () => {
    const heartsValue = hearts?.hearts ? hearts?.hearts + 1 : 0 + 1;
    const newHeart: IHeart = {
      hearts: heartsValue,
      id: "1",
    };
    mutation.mutate(newHeart);
  };

  const handleHeartClicked = () => {
    setIsLiked(true);
    handleAddLike();
    console.log(hearts?.hearts);
  };

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
            animate={{ width: "400px" }}
            transition={{
              type: "spring",
              duration: 3,
              stiffness: 260,
              damping: 20,
            }}
          >
            <span>{hearts?.hearts}</span>
            <motion.span
              whileHover={{ scale: 1.2, y: -10 }}
              whileTap={{
                scale: 0.3,
                borderRadius: "100%",
              }}
            >
              <Heart
                onClick={handleHeartClicked}
                color={isliked ? "red" : "black"}
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
