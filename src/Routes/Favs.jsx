import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoritesFromStorage = localStorage.getItem("favorites");
    if (favoritesFromStorage && favoritesFromStorage.length > 0) {
      setFavorites(JSON.parse(favoritesFromStorage));
    }
  }, [favorites]);

  return (
    <>
      <h1>Dentistas favortitos</h1>
      <div className="card-grid container">
        {favorites.map((favorite) => (
          <Card key={favorite.id} name={favorite.name} id={favorite.id} />
        ))}
      </div>
    </>
  );
};

export default Favs;
