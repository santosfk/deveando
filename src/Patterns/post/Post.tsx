import Image from "next/image";
import React, { useEffect } from "react";
import { Container, Title, ImageContent } from "./style";
import { setInfo } from "../../redux/blogInfoSlice";

import Link from "next/link";
type Props = {
  size: string;
  title: string;
  img: string;
  description: string;
};
import { useDispatch } from "react-redux";
export default function Post({ size, title, img, description }: Props) {
  const dispatch = useDispatch();
  const setDataPost = () => {
    const dataPost = {
      title: title,
      img: img,
      description: description,
    };
    dispatch(setInfo(dataPost));
  };
  return (
    <Link href={`post/${title}`}>
      <Container size={size} onClick={() => setDataPost()}>
        <Title size={size}>{title}</Title>
        <ImageContent
          size={size}
          src={img}
          style={{
            position: "absolute",
          }}
          alt=""
        />
      </Container>
    </Link>
  );
}
