import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 991px) {
    height: 100%;

  }
  @media (max-width: 375px) {
    overflow-x: hidden;
  }
  .modal-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
    z-index: 10;
  }
`;
