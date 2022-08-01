import Head from "next/head";

import Container from "../components/Layout/Container";
import MainNavigation from "../components/Layout/MainNavigation";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <MainNavigation />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
