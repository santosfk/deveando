import "../styles/GlobalStyle.ts";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./api/prismic";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PrismicProvider client={client}>
            <GlobalStyle />
            <Component {...pageProps} />
          </PrismicProvider>
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
