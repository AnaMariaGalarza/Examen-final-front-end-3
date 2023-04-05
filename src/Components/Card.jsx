import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useState, useEffect } from "react";

const Card = ({ name, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isCardFavorite = favorites.some((favorite) => favorite.id === id);
    setIsFavorite(isCardFavorite);
  }, [id]);

  const handleFavoriteToggle = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      favorites.push({ id, name });
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className={`card`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          <Link to={`/dentist/${id}`}>
            <h5 className={`card-title ${styles.title}`}>{name}</h5>
          </Link>
          <button
            className="btn btn-sm star"
            onClick={handleFavoriteToggle}
          >
            {isFavorite ? "★" : "☆"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
