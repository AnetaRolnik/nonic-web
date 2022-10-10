import { useState } from "react";

import AuthForm from "../components/Auth/AuthForm";
import classes from "../styles/Auth.module.scss";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <>
      <h1>{isLogin ? "Logowanie" : "Rejestracja"}</h1>
      <AuthForm isLogin={isLogin} />
      <button onClick={switchAuthModeHandler} className={classes.btn}>
        {isLogin
          ? "Nie masz konta? Zarejestruj się!"
          : "Masz już konto? Zaloguj się!"}
      </button>
    </>
  );
};

export default AuthPage;
