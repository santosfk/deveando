import styled from "styled-components";

export const BackDrop = styled.div`
  background-color: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 2;
`;
export const Container = styled.div`
  width: 600px;
  height: 300px;
  background-color: white;
  position: absolute;
  z-index: 3;
  border-radius: 10px;
  left: 30rem;
  top: 10rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
