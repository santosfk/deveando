import React from "react";
import { BackDrop, Container } from "./style";
interface Props {
  setModalOn: Function;
}
export const EmailModal = ({ setModalOn }: Props) => {
  return (
    <>
      <BackDrop onClick={() => setModalOn(false)} />
      <Container>alo</Container>
    </>
  );
};
