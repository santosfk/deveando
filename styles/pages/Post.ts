import styled from "styled-components";

export const Container = styled.div`
  transition: 0.5s;
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;

  span {
    margin-top: 10px;
    max-width: 1000px;
    font-family: Arial, Helvetica, sans-serif;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    line-height: 28px;
    font-size: 1.2rem;
    opacity: 0.8;
  }
`;
export const PostContainer = styled.div`
  margin-top: 130px;
`;
export const HeadContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  position: fixed;
  z-index: 8;
`;
export const LikeComponent = styled.div`
  width: 400px;
  border-radius: 50px;
  background: rgba(57, 57, 57, 0.58);
  backdrop-filter: blur(2px);
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2;
  top: 80%;
`;
