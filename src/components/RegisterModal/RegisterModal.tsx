import React from "react";
import { Props } from "./type";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { Container, Title, Button, LoggedContainer, PerfilImg } from "./style";
import { GithubLogo } from "phosphor-react";
import { GetServerSideProps } from "next/types";
export const RegisterModal = ({ setModalIsOpen }: Props) => {
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      {session?.user ? (
        <LoggedContainer>
          <PerfilImg src={session?.user?.image} alt="imagem de perfil" />
          <h1>{session?.user?.name}</h1>
          <span>
            Quando um novo post você será notificado no email :{" "}
            {session?.user?.email}
          </span>
        </LoggedContainer>
      ) : (
        <Container>
          <Title>Faça login Aqui!!</Title>
          <span>{}</span>
          <span>dev utiliza o github</span>
          <Button color="#3CB57A" onClick={() => signIn("github")}>
            Logar <GithubLogo size={22} weight="fill" />{" "}
          </Button>
          <Button color="#D61E2D" onClick={handleCloseModal}>
            fechar
          </Button>
        </Container>
      )}
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};
