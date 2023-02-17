import styles from "./Card.module.css";

export default function Card({ name, species, gender, image, onClose }) {
  return (
    <div className={styles.cardDiv}>
      <button onClick={onClose}>X</button>
      <div className={styles.divImg}>
        <h2> {name} </h2>
        <img src={image} alt={name} />
      </div>
      <div className={styles.divSubtitles}>
        <h2> {gender} </h2>
        <h2> {species} </h2>
      </div>
    </div>
  );
}
