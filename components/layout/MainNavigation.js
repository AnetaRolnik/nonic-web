import Link from "next/link";
import { useContext } from "react";

import AuthContext from "../../store/auth-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const logoutClickHandler = () => authCtx.logout();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link href="/">LOGO</Link>
        <nav className={classes.nav}>
          <Link href="/beers">
            <a className={classes.item}>Wszystkie piwa</a>
          </Link>
          {!authCtx.isLoggedIn && (
            <Link href="/auth">
              <a className={classes.item}>Zaloguj się</a>
            </Link>
          )}
          {authCtx.isLoggedIn && (
            <Link href="/">
              <a className={classes.item}>Ulubione</a>
            </Link>
          )}
          {authCtx.isLoggedIn && (
            <Link href="/">
              <a className={classes.item} onClick={logoutClickHandler}>
                Wyloguj się
              </a>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
