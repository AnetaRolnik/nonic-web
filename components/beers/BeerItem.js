import Link from "next/link";

import Card from "../ui/card";

const BeerItem = (props) => {
  const { name, alcohol, rating, count, code } = props;
  const path = `/beers/${code}`;

  return (
    <li>
      <Link href={path}>
        <a>
          <Card>
            <div>{name}</div>
            <div>Alkohol: {alcohol}</div>
            <div>
              Ocena użytkowników: {rating}/{count}
            </div>
          </Card>
        </a>
      </Link>
    </li>
  );
};

export default BeerItem;
