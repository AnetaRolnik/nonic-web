import Head from "next/head";

import Container from "../components/layout/Container";
import MainNavigation from "../components/layout/MainNavigation";

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
