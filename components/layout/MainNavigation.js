import Link from "next/link";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link href="/">LOGO</Link>
        <nav className={classes.nav}>
          <Link href="/beers">
            <a className={classes.item}>Wszystkie piwa</a>
          </Link>
          <Link href="/sign-in">
            <a className={classes.item}>Zaloguj się</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
