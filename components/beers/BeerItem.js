import Link from "next/link";

const BeerItem = (props) => {
  const { name, alcohol, rating, count, code } = props;
  const path = `/beers/${code}`;

  return (
    <li>
      <div>{name}</div>
      <div>Alkohol: {alcohol}</div>
      <div>
        Ocena użytkowników: {rating}/{count}
      </div>
      <Link href={path}>Zobacz więcej</Link>
    </li>
  );
};

export default BeerItem;
