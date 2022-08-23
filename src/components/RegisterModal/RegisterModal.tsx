import React from "react";
import { Props } from "./type";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { Container, Title, Button, LoggedContainer, PerfilImg } from "./style";
import { GithubLogo, XSquare } from "phosphor-react";
import { GetServerSideProps } from "next/types";

export const RegisterModal = ({ setModalIsOpen, modalIsOpen }: Props) => {
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  const { data: session } = useSession();
  const imgSrc = session?.user?.image ? session?.user?.image : "";
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  return (
    <>
      {session?.user ? (
        <LoggedContainer
        animate={modalIsOpen?'open':'closed'}
        variants={variants}
        >
          <XSquare
            size={42}
            weight="fill"
            className="close-icon"
            onClick={handleCloseModal}
          />
          <PerfilImg src={imgSrc} alt="imagem de perfil" />
          <h1>{session?.user?.name}</h1>
          <span>
            Quando um novo post você será notificado no email :{" "}
            {session?.user?.email}
          </span>
          <Button color="#D61E2D" onClick={() => signOut()}>
            Sair
          </Button>
        </LoggedContainer>
      ) : (
        <Container
        animate={modalIsOpen?'open':'closed'}
        variants={variants}
        >
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
