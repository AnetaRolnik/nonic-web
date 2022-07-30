import Link from "next/link";

import Form from "./Form";

const SignView = ({ signUpView }) => {
  if (signUpView) {
    return (
      <>
        <h1>Rejestracja</h1>
        <Form signUpView={signUpView} />
        <div>
          Masz już konto? <Link href="/sign-in">Zaloguj się</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>Logowanie</h1>
      <Form signUpView={signUpView} />
      <div>
        Nie masz konta? <Link href="/sign-up">Zarejestruj się</Link>
      </div>
    </>
  );
};

export default SignView;
