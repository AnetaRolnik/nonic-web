export const getAllBeers = async (offset = 0) => {
  const response = await fetch(
    `http://localhost:8000/api-mobile/beers/?offset=${offset}&limit=12`
  );
  const responseData = await response.json();

  const allBeers = responseData.results;

  return allBeers;
};

export const getFeaturedBeers = async () => {
  const allBeers = await getAllBeers();

  const featuredBeers = allBeers.filter(
    (beer) => beer.rating >= 4.0 && beer["rating_count"] >= 100
  );

  return featuredBeers;
};

export const getDetailsBeer = async (code) => {
  const response = await fetch(
    `http://localhost:8000/api-mobile/beers/${code}`
  );
  const responseData = await response.json();

  return responseData;
};

export const getFavorites = async (userToken) => {
  const response = await fetch(
    "http://localhost:8000/api-mobile/user/favorites/",
    {
      headers: { Authorization: `Bearer ${userToken}` },
    }
  );

  const responseData = await response.json();

  return responseData;
};
