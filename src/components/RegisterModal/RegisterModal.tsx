import React, { useEffect, useState } from "react";
import { Props } from "./type";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { Container, Title, Button, LoggedContainer, PerfilImg } from "./style";
import { GithubLogo, XSquare } from "phosphor-react";
import { GetServerSideProps } from "next/types";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../../service/firebaseConfig";

export const RegisterModal = ({  }: Props) => {
  const { data: session, status } = useSession();
  const imgSrc = session?.user?.image ? session?.user?.image : "";
  const userEmail = session?.user?.email;
  const [userIsLogged, setUserIsLogged] = useState<Boolean>(false);
  useEffect(() => {
    setEmailInDb();
  }, [userEmail]);
  const handleCloseModal = () => {
   
  };
  const handleSignin = (provider: string) => {
    signIn(provider);
  };

  const setEmailInDb = async () => {
    if (userEmail !== undefined) {
      try {
        const docRef = await addDoc(collection(database, "users"), {
          email: `${userEmail}`,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };
  if (userIsLogged) {
    setEmailInDb();
  }

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: "-100rem", scale: 0.3 },
  };

  return (
    <>
      {session?.user ? (
        <LoggedContainer>
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
        <Container>
          <Title>Faça login Aqui!!</Title>
          <span>{}</span>
          <span>dev utiliza o github</span>
          <Button color="#3CB57A" onClick={() => handleSignin("github")}>
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
