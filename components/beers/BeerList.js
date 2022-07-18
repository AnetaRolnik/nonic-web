import BeerItem from "./BeerItem";

const BeerList = (props) => {
  const beers = props.beers;

  return (
    <ul>
      {beers.map((beer) => (
        <BeerItem
          key={beer.id}
          name={beer.name}
          alcohol={beer.alcohol}
          rating={beer.rating}
          count={beer["rating_count"]}
          code={beer.code}
        />
      ))}
    </ul>
  );
};

export default BeerList;
