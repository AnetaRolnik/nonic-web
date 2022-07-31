import { useRef } from "react";

const Form = ({ signUpView }) => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const mailRef = useRef();
  const phoneRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const eneteredPassword = passwordRef.current.value;

    let body = {};

    if (signUpView) {
      const enteredMail = mailRef.current.value;
      const eneteredPhone = phoneRef.current.value;

      body = {
        username: enteredName,
        password: eneteredPassword,
        email: enteredMail,
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
    });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="name">Nazwa</label>
      <input
        id="name"
        name="name"
        type="text"
        ref={nameRef}
        required={true}
        autoComplete="on"
      />
      <label htmlFor="password">Hasło</label>
      <input
        id="password"
        name="password"
        type="password"
        ref={passwordRef}
        required={true}
        autoComplete="on"
      />
      {signUpView && (
        <>
          <label htmlFor="mail">Email</label>
          <input
            id="mail"
            name="mail"
            type="email"
            ref={mailRef}
            required={true}
            autoComplete="on"
          />
          <label htmlFor="phone">Numer telefonu</label>
          <input
            id="phone"
            name="phone"
            type="text"
            ref={phoneRef}
            required={true}
            autoComplete="on"
          />
        </>
      )}
      <button type="submit">
        {signUpView ? "Zarejestruj się" : "Zaloguj się"}
      </button>
    </form>
  );
};

export default Form;
