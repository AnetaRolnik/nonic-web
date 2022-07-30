import Head from "next/head";

import { getFeaturedBeers } from "../helpers/api-util";
import BeerList from "../components/beers/BeerList";

const HomePage = ({ featuredBeers }) => {
  const head = (
    <Head>
      <title>Featured Beers</title>
      <meta name="description" content="The best and most rated beers"></meta>
    </Head>
  );

  return (
    <>
      {head}
      <h1>Najlepsze z najlepszych!</h1>
      <BeerList beers={featuredBeers} />
    </>
  );
};

export const getStaticProps = async () => {
  const featuredBeers = await getFeaturedBeers();

  return {
    props: {
      featuredBeers: featuredBeers,
    },
    revalidate: 3600,
  };
};

export default HomePage;
