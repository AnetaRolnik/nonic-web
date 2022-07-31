import { useRef } from "react";

import Input from "../UI/Input";

const Form = ({ signUpView }) => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const eneteredPassword = passwordRef.current.value;

    let body = {};

    if (signUpView) {
      const enteredEmail = emailRef.current.value;
      const eneteredPhone = phoneRef.current.value;

      body = {
        username: enteredName,
        password: eneteredPassword,
        email: enteredEmail,
        phone: eneteredPhone,
      };
    }

    fetch("http://localhost:8000/users/register/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(() => {
      nameRef.current.value = "";
      passwordRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
    });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Input label="Nazwa" name="name" type="text" ref={nameRef} />
      <Input label="Hasło" name="password" type="password" ref={passwordRef} />
      {signUpView && (
        <>
          <Input label="Email" name="email" type="email" ref={emailRef} />
          <Input label="Telefon" name="phone" type="text" ref={phoneRef} />
        </>
      )}
      <button type="submit">
        {signUpView ? "Zarejestruj się" : "Zaloguj się"}
      </button>
    </form>
  );
};

export default Form;
