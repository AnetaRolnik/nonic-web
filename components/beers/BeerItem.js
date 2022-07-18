import Link from "next/link";

const BeerItem = (props) => {
  const { name, alcohol, rating, count, code } = props;

  return (
    <li>
      <div>{name}</div>
      <div>Alkohol: {alcohol}</div>
      <div>
        Ocena użytkowników: {rating}/{count}
      </div>
      <Link href={`/${code}`}>Zobacz więcej</Link>
    </li>
  );
};

export default BeerItem;
