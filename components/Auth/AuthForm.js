import { useRef } from "react";

import Input from "../UI/Input";

const AuthForm = ({ isLogin }) => {
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
        .then((response) => response.json())
        .then((responseData) => console.log(responseData.access));
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
      }).then(() => {
        nameRef.current.value = "";
        passwordRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
      });
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Input label="Nazwa" name="name" type="text" ref={nameRef} />
      <Input label="Hasło" name="password" type="password" ref={passwordRef} />
      {!isLogin && (
        <>
          <Input label="Email" name="email" type="email" ref={emailRef} />
          <Input label="Telefon" name="phone" type="text" ref={phoneRef} />
        </>
      )}
      <button type="submit">
        {isLogin ? "Zaloguj się" : "Zarejestruj się"}
      </button>
    </form>
  );
};

export default AuthForm;
