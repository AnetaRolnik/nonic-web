import { useState } from "react";

import AuthForm from "../components/Auth/AuthForm";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <>
      <h1>{isLogin ? "Logowanie" : "Rejestracja"}</h1>
      <AuthForm isLogin={isLogin} />
      <button onClick={switchAuthModeHandler}>
        {isLogin ? "Utwórz konto" : "Mam już konto"}
      </button>
    </>
  );
};

export default AuthPage;
