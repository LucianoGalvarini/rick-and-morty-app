import React from "react";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Card.module.css";

export default function Card({ name, species, gender, image, onClose, id }) {
  const [isFav, setFav] = React.useState(false);

  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  function handleFavorite() {
    if (isFav) {
      setFav(false);
      dispatch(removeFavorite(id));
    } else {
      setFav(true);
      dispatch(addFavorite({ name, species, gender, image, id }));
    }
  }

  React.useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setFav(true);
      }
    });
  });

  return (
    <div className={styles.containerCard}>
      <button onClick={onClose} className={styles.closeButton}>
        X
      </button>
      {isFav ? (
        <button className={styles.favouriteButton} onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className={styles.favouriteButton} onClick={handleFavorite}>
          🤍
        </button>
      )}

      <Link to={`/detail/${id}`}>
        <img src={image} alt={name} className={styles.imgCard} />
        <div className={styles.labelsCard}>
          <h2 className={styles.name}>{name}</h2>
          <div className={styles.types}>
            <h2 className={styles.species}>{species}</h2>
            <h2 className={styles.gender}>{gender}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}
