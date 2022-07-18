const BeerItem = (props) => {
  const { name, alcohol, rating, count } = props;

  return (
    <li>
      <div>{name}</div>
      <div>Alkohol: {alcohol}</div>
      <div>
        Ocena użytkowników: {rating}/{count}
      </div>
    </li>
  );
};

export default BeerItem;
