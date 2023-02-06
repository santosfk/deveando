import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding-bottom: 6rem;
  transition: 0.5s;

  @media (max-width: 991px) {
    height: 100%;
  }
  @media (max-width: 375px) {
    overflow-x: hidden;
  }
`;
