import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 0.6rem 3rem;
  .user-icon {
    color: #a6034f;
  }

  @media (max-width: 320px) {
    .user-icon {
      margin-right: -2rem;
    }
  }
`;
export const ImgContent = styled.div`
  width: 80px;
  height: 80px;
`;
