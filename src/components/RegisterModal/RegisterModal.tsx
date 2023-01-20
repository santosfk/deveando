import React, { useEffect, useState } from "react";
import { Props } from "./type";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import {
  Container,
  Title,
  Button,
  PerfilImg,
  ButtonWrapper,
  EmailContent,
} from "./style";
import { XSquare } from "phosphor-react";
import { GetServerSideProps } from "next/types";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../../service/firebaseConfig";
import { useDispatch } from "react-redux";
import { DiGithubFull as GithubLogo } from "react-icons/di";
import { AnimatePresence, motion } from "framer-motion";
import { setModalState } from "../../redux/modalSlice";
import { useSelector } from "react-redux";
export const RegisterModal = ({}: Props) => {
  const { data: session, status } = useSession();
  const imgSrc = session?.user?.image ? session?.user?.image : "";
  const userEmail = session?.user?.email;
  const [userIsLogged, setUserIsLogged] = useState<Boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setEmailInDb();
  }, [userEmail]);
  const handleCloseModal = () => {
    dispatch(setModalState(false));
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

  const { isOn } = useSelector((state: any) => state.modalSlice);
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0, scale: 0.3 },
  };
  const buttonVariants = {
    open: { opacity: 1, scale: 1, transition: { delay: 0.2 } },
    whileTap: { scale: 2 },
    closed: { opacity: 0, scale: 0 },
  };
  const nameVariants = {
    open: { opacity: 1, y: 0, transition: { delay: 0.3 } },
    closed: { opacity: 0, y: 10 },
  };
  const textsVariants = {
    open: { opacity: 1, y: 0, transition: { delay: 0.4 } },
    closed: { opacity: 0, y: 10 },
  };
  const LoggedInfos = () => {
    return (
      <>
        <ButtonWrapper
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1, delay: 0.3 }}
        >
          <XSquare
            size={42}
            weight="fill"
            color="red"
            onClick={handleCloseModal}
          />
        </ButtonWrapper>
        <PerfilImg
          src={imgSrc}
          alt="imagem de perfil"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <Title
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {session?.user?.name}
        </Title>
        <EmailContent
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.1 }}
        >
          {session?.user?.email}
        </EmailContent>
        <Button
          color="#D61E2D"
          onClick={() => signOut()}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          Logout
        </Button>
      </>
    );
  };
  const NologgedInfos = () => {
    return (
      <>
        <Title
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          Faça login
        </Title>

        <Button
          bg="#3CB57A"
          onClick={() => handleSignin("github")}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{ delay: 0.1, duration: 0.1 }}
          whileHover={{ y: -10 }}
        >
          <GithubLogo size={70} />
        </Button>
        <Button
          color="red"
          onClick={handleCloseModal}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0, duration: 0 }}
          whileHover={{ scale: 1.2 }}
        >
          fechar
        </Button>
      </>
    );
  };

  return (
    <>
      <AnimatePresence>
        <Container variants={variants} animate={isOn ? "open" : "closed"}>
          {session?.user ? <LoggedInfos /> : <NologgedInfos />}
        </Container>
      </AnimatePresence>
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
