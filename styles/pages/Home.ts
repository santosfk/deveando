import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  @media (max-width: 991px) {
    height: 100%;
  }
  @media (max-width: 375px) {
    overflow-x: hidden;
  }
  .modal-wrapper {
    left: 50%;
    top: 30%;
    position: absolute;
    transform: translateX(-50%) !important;
    /* transform: translateY(-50%) !important; */
    z-index: 10;
  }
`;
