import "../styles/GlobalStyle.ts";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme/theme";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./api/prismic";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <PrismicProvider client={client}>
        <GlobalStyle />
        <Component {...pageProps} />
      </PrismicProvider>
    </ThemeProvider>
  );
}

export default MyApp;
