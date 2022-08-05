import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 12rem;
  padding: 0rem 3rem;
`;
export const ImgContent = styled.div`
  width: 11rem;
  height: 11rem;
`;
export const IconWrapper = styled.div`
  margin-top: -8rem;
  .icon {
    cursor: pointer;
    color: white;
    transition: 0.4s;
  }
  .icon:hover {
    color: #31c0b8;
  }
`;
