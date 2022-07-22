import Link from "next/link";

const MainNavigation = () => {
  return (
    <header>
      <div>LOGO</div>
      <nav>
        <Link href="/beers">All beers</Link>
      </nav>
    </header>
  );
};

export default MainNavigation;
