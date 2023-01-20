import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
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

