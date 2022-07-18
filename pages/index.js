const HomePage = ({ featuredBeers }) => {
  return featuredBeers.map((beer) => <span>{beer.name}</span>);
};

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:8000/api-mobile/beers/");
  const responseData = await response.json();

  const allBeers = responseData.results;
  const featuredBeers = allBeers.filter(
    (beer) => beer.rating >= 4.0 && beer["rating_count"] > 100
  );

  return {
    props: {
      featuredBeers: featuredBeers,
    },
    revalidate: 3600,
  };
};

export default HomePage;
