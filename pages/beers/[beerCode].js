import Head from "next/head";

import { getAllBeers, getDetailsBeer } from "../../helpers/api-util";

const BeerDetailPage = ({ selectedBeer }) => {
  const head = (
    <Head>
      <title>{selectedBeer.name}</title>
      <meta
        name="description"
        content={`Details of beer ${selectedBeer.name}`}
      ></meta>
    </Head>
  );

  return (
    <>
      {head}
      <h1>{selectedBeer.name}</h1>
      <div>Alkohol: {selectedBeer.alcohol}</div>
      <div>Kod: {selectedBeer.code}</div>
      <div>Kraj: {selectedBeer.country}</div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const code = context.params.beerCode;

  const selectedBeer = await getDetailsBeer(code);

  return {
    props: {
      selectedBeer: selectedBeer,
    },
  };
};

export const getStaticPaths = async () => {
  const allBeers = await getAllBeers();

  const paths = allBeers.map((beer) => ({ params: { beerCode: beer.code } }));

  return {
    paths: paths,
    fallback: true,
  };
};

export default BeerDetailPage;
