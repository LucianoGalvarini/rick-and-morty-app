import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../Detail/Detail.module.css";

export default function Detail(props) {
  const [infoDetail, setInfo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  function backToHome() {
    navigate("/home");
  }

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setInfo(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });

    return () => setInfo({});
  }, [id]);

  return (
    <div className={styles.containerDetail}>
      <div>
        <button onClick={backToHome} className={styles.botonVolver}>
          Volver
        </button>
      </div>
      {infoDetail.id ? (
        <div className={styles.labelsDetail}>
          <h2>
            Name: <span>{infoDetail.name}</span>{" "}
          </h2>
          <h5>
            Status: <span> {infoDetail.status} </span>{" "}
          </h5>
          <h5>
            Specie: <span> {infoDetail.species} </span>{" "}
          </h5>
          <h5>
            Gender: <span>{infoDetail.gender} </span>{" "}
          </h5>
          <h5>
            Origin: <span>{infoDetail.origin} </span>{" "}
          </h5>
          <img
            className={styles.imgDetail}
            src={infoDetail.image}
            alt={infoDetail.name}
          />
        </div>
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
}
