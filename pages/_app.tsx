import "../styles/GlobalStyle.ts";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme/theme";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./api/prismic";
import { Provider, useSelector } from "react-redux";
import store from "../src/redux/store";
import { SessionProvider } from "next-auth/react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { queryClient } from "./api/queryClient";
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PrismicProvider client={client}>
            <GlobalStyle />
            <Component {...pageProps} />
          </PrismicProvider>
        </Provider>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
