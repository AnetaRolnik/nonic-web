import Head from "next/head";

import { AuthContextProvider } from "../store/auth-context";
import Container from "../components/Layout/Container";
import MainNavigation from "../components/Layout/MainNavigation";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <MainNavigation />
      <Container>
        <Component {...pageProps} />
      </Container>
    </AuthContextProvider>
  );
}

export default MyApp;
