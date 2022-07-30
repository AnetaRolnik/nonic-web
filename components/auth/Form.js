import { useRef } from "react";

const Form = ({ signUpView }) => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const mailRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const eneteredPassword = passwordRef.current.value;

    if (signUpView) {
      const enteredMail = mailRef.current.value;
    }
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
        </>
      )}
      <button type="submit">
        {signUpView ? "Zarejestruj się" : "Zaloguj się"}
      </button>
    </form>
  );
};

export default Form;
