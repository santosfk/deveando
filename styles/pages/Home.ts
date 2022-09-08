import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #010030 0%, #7ae8e1 123.83%);
  @media (max-width: 991px) {
    height: 100vh;
    overflow-y: scroll;
  }
  @media (max-width: 375px) {
    overflow-x: hidden;
  }
`;
