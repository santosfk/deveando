import React from "react";
import { usePrismicDocuments } from "@prismicio/react";
import { Container, BigPost, SmallPosts, PostWrapper } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import Post from "../../Patterns/post/Post";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function HomePosts() {
  const [documents] = usePrismicDocuments();
  documents?.results.map((item) => {
    const dataDescription = item.data.description[0].text;
  });

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      cssMode={true}
      color="white"
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {documents?.results.map((item, index) => {
        const dataTitle = item.data.title[0].text;
        const dataDescription = item.data.description[0].text;
        const dataImg = item.data.image.url;
        return (
          <SwiperSlide key={index}>
            <PostWrapper>
              <Post
                size="bg"
                title={dataTitle}
                img={dataImg}
                key={index}
                description={dataDescription}
              />{" "}
            </PostWrapper>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
