import Head from "next/head";
import { useContext } from "react";

import { AuthContextProvider } from "../store/auth-context";
import SnackbarContext, {
  SnackbarContextProvider,
} from "../store/snackbar-contex";
import Container from "../components/Layout/Container";
import MainNavigation from "../components/Layout/MainNavigation";

import "../styles/globals.css";
import Snackbar from "../components/UI/Snackbar";

const AppBody = (props) => {
  const snackbarCtx = useContext(SnackbarContext);

  return (
    <>
      <MainNavigation />
      <Container>{props.children}</Container>
      {snackbarCtx.snackbar && <Snackbar />}
    </>
  );
};

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AuthContextProvider>
        <SnackbarContextProvider>
          <AppBody>
            <Component {...pageProps} />
          </AppBody>
        </SnackbarContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
