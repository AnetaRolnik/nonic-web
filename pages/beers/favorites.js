import Link from "next/link";
import { useState, useEffect, useContext } from "react";

import BeerList from "../../components/Beers/BeerList";
import { getFavorites } from "../../helpers/api-util";
import AuthContext from "../../store/auth-context";
import Card from "../../components/UI/Card";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const ctx = useContext(AuthContext);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favorites = await getFavorites(ctx.token);

      if (favorites.results) {
        setFavorites(favorites.results);
      }
    };

    fetchFavorites();
  }, [ctx.token]);

  return (
    <>
      <h1>Twoi ulubieńcy</h1>
      {favorites.length > 0 && <BeerList beers={favorites} />}
      {favorites.length === 0 && (
        <Card>
          <h3>Nie masz ulubionych piw</h3>
          <Link href="/beers">Zobacz wszystkie piwa</Link>
        </Card>
      )}
    </>
  );
};

export default FavoritesPage;
