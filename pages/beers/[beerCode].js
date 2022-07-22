import Head from "next/head";

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

  const response = await fetch(
    `http://localhost:8000/api-mobile/beers/${code}`
  );
  const responseData = await response.json();

  return {
    props: {
      selectedBeer: responseData,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:8000/api-mobile/beers/");
  const responseData = await response.json();

  const allBeers = responseData.results;

  const paths = allBeers.map((beer) => ({ params: { beerCode: beer.code } }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default BeerDetailPage;
