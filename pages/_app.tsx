import "../styles/GlobalStyle.ts";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme/theme";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./api/prismic";
import { Provider } from "react-redux";
import store from "../src/redux/blogInfo/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PrismicProvider client={client}>
          <GlobalStyle />
          <Component {...pageProps} />
        </PrismicProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
