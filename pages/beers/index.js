import BeerList from "../../components/beers/BeerList";

const AllBeers = ({ beers }) => {
  return <BeerList beers={beers} />;
};

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:8000/api-mobile/beers/");
  const responseData = await response.json();

  const allBeers = responseData.results;

  return {
    props: {
      beers: allBeers,
    },
  };
};

export default AllBeers;
