import { useState } from "react";
import styles from "./DetailCard.module.css";

const DetailCard = ({ name, username, user_id, email, phone, website }) => {

  const [isFavorite, setIsFavorite] = useState(
    JSON.parse(localStorage.getItem("favorites") || "[]").some(
      (favorite) => favorite.id === user_id
    )
  );

  const handleToggleFavorite = () => {
    const favoritesFromStorage = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    const index = favoritesFromStorage.findIndex(
      (favorite) => favorite.id === user_id
    );

    if (index === -1) {
      const newFavorite = { id: user_id, name };
      favoritesFromStorage.push(newFavorite);
      console.log(newFavorite)
      localStorage.setItem("favorites", JSON.stringify(favoritesFromStorage));
      setIsFavorite(true);
    } else {
      favoritesFromStorage.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(favoritesFromStorage));
      setIsFavorite(false);
    }
  };

  return (
    <>
      <h1>Detalle sobre {name} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        <div className={`card-body row`}>
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nombre: {name.split(" ")[0]}</li>
              <li className="list-group-item">
                Apellido: {name.split(" ")[1]}
              </li>
              <li className="list-group-item">Username: {username}</li>
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Telefono: {phone}</li>
              <li className="list-group-item">Sitio web: {website}</li>
            </ul>
            <div className="text-center">
              <button
                className={`btn btn-light ${styles.button}`}
                onClick={handleToggleFavorite}
              >
                {isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailCard;