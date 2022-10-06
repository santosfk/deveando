import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: 991px) {
    height: 100vh;
    overflow-y: scroll;
  }
  @media (max-width: 375px) {
    overflow-x: hidden;
  }
`;
