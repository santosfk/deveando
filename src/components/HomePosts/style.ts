import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  .swiper {
    width: 100%;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  @media (max-width: 2000px) {
    gap: 3rem;
  }
`;
export const PostWrapper = styled.div`
  width: 100%;
  margin-top: 10rem;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BigPost = styled.div``;
export const SmallPosts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 3rem;
  @media (max-width: 1024px) {
    gap: 1rem;
  }
`;
