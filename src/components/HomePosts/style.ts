import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 3rem;
  gap: 10rem;
  @media (max-width:2000px){
    gap: 3rem;
  }
`;
export const BigPost = styled.div``;
export const SmallPosts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 3rem;
  @media (max-width:1024px) {
    gap: 1rem;
  }
`;
