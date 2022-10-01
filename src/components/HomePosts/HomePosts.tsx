import React from "react";
import { usePrismicDocuments } from "@prismicio/react";
import { Container, BigPost, SmallPosts } from "./style";
import Post from "../../Patterns/post/Post";
export default function HomePosts() {
  const [documents] = usePrismicDocuments();
  documents?.results.map((item) => {
    const dataDescription = item.data.description[0].text;
  });
  return (
    <Container>
      <BigPost>
        {documents?.results.map((item, index) => {
          const dataTitle = item.data.title[0].text;
          const dataDescription = item.data.description[0].text;
          const dataImg = item.data.image.url;
          if (index === 0) {
            return (
              <Post
                size="bg"
                key={index}
                title={dataTitle}
                img={dataImg}
                description={dataDescription}
              />
            );
          }
        })}
      </BigPost>
      <SmallPosts>
        {documents?.results.map((item, index) => {
          const dataTitle = item.data.title[0].text;
          const dataDescription = item.data.description[0].text;
          const dataImg = item.data.image.url;

          if (index > 0) {
            return (
              <Post
                key={index}
                size=""
                title={dataTitle}
                img={dataImg}
                description={dataDescription}
              />
            );
          }
        })}
      </SmallPosts>
    </Container>
  );
}
