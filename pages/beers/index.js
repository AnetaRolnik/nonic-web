import Head from "next/head";

import { getAllBeers } from "../../helpers/api-util";
import BeerList from "../../components/Beers/BeerList";

const AllBeers = ({ beers }) => {
  const head = (
    <Head>
      <title>All Beers</title>
      <meta name="description" content="List of all beers"></meta>
    </Head>
  );

  return (
    <>
      {head}
      <h1>Co kto lubi!</h1>
      <BeerList beers={beers} />
    </>
  );
};

export const getStaticProps = async () => {
  const allBeers = await getAllBeers();

  return {
    props: {
      beers: allBeers,
    },
  };
};

export default AllBeers;
