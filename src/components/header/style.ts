import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 12rem;
  padding: 0rem 3rem;
  .user-icon {
    margin-top: -8rem;
    color: white;
  }
  
  @media (max-width: 320px) {
    .user-icon {
      margin-right: -2rem;
    }
  }
`;
export const ImgContent = styled.div`
  width: 11rem;
  height: 11rem;
`;
