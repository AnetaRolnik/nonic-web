import { useRef, useContext } from "react";
import { useRouter } from "next/router";

import Input from "../UI/Input";
import AuthContext from "../../store/auth-context";
import SnackbarContext from "../../store/snackbar-contex";
import classes from "./AuthForm.module.scss";

const AuthForm = ({ isLogin }) => {
  const authCtx = useContext(AuthContext);
  const snackbarCtx = useContext(SnackbarContext);

  const router = useRouter();

  const nameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const eneteredPassword = passwordRef.current.value;

    if (isLogin) {
      const loginData = {
        username: enteredName,
        password: eneteredPassword,
      };

      fetch("http://localhost:8000/users/token/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      })
        .then((response) => {
          if (!response.ok) {
            return Promise.reject(`Http error: ${response.status}`);
          }
          return response.json();
        })
        .then((responseData) => {
          authCtx.login(responseData.access);
          router.push("/");
          snackbarCtx.open("Zalogowano się pomyślnie!");
        })
        .catch((error) => console.error(error));
    } else {
      const enteredEmail = emailRef.current.value;
      const eneteredPhone = phoneRef.current.value;

      const signupData = {
        username: enteredName,
        password: eneteredPassword,
        email: enteredEmail,
        phone: eneteredPhone,
      };

      fetch("http://localhost:8000/users/register/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      })
        .then((response) => {
          if (!response.ok) {
            return Promise.reject(`Http error: ${response.status}`);
          }
          nameRef.current.value = "";
          passwordRef.current.value = "";
          emailRef.current.value = "";
          phoneRef.current.value = "";
          snackbarCtx.open("Rejestracja przebiegła pomyślnie!");
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <Input label="Nazwa" name="name" type="text" ref={nameRef} />
      <Input label="Hasło" name="password" type="password" ref={passwordRef} />
      {!isLogin && (
        <>
          <Input label="Email" name="email" type="email" ref={emailRef} />
          <Input label="Telefon" name="phone" type="text" ref={phoneRef} />
        </>
      )}
      <button type="submit" className={classes.btn}>
        {isLogin ? "Zaloguj się" : "Zarejestruj się"}
      </button>
    </form>
  );
};

export default AuthForm;
