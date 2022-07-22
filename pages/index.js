import Head from "next/head";

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
      <BeerList beers={featuredBeers} />
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:8000/api-mobile/beers/");
  const responseData = await response.json();

  const allBeers = responseData.results;
  const featuredBeers = allBeers.filter(
    (beer) => beer.rating >= 4.0 && beer["rating_count"] >= 100
  );

  return {
    props: {
      featuredBeers: featuredBeers,
    },
    revalidate: 3600,
  };
};

export default HomePage;
