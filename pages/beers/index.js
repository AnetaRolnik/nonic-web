import Head from "next/head";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

import { getAllBeers } from "../../helpers/api-util";
import BeerList from "../../components/Beers/BeerList";

const AllBeersPage = ({ beers }) => {
  const [items, setItems] = useState(beers);
  const [noMore, setNoMore] = useState(true);
  const [offset, setOffset] = useState(12);

  const head = (
    <Head>
      <title>All Beers</title>
      <meta name="description" content="List of all beers"></meta>
    </Head>
  );

  const fetchData = async () => {
    const allBeers = await getAllBeers(offset);

    allBeers.length === 0 && setNoMore(false);

    setItems([...items, ...allBeers]);
    setOffset(offset + 12);
  };

  return (
    <>
      {head}
      <h1>Co kto lubi!</h1>
      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchData}
        hasMore={noMore}
        loader={<h4>Loading...</h4>}
        endMessage={"Koniec"}
      >
        <BeerList beers={items} />
      </InfiniteScroll>
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

export default AllBeersPage;
