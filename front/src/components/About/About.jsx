import styles from "../About/About.module.css";

export default function About(props) {
  return (
    <div>
      <h3>
        Galvarini Luciano{" "}
        <a
          href="https://github.com/LucianoGalvarini"
          target={"_blank"}
          rel="noreferrer"
        >
          GitHub
        </a>
      </h3>
      <img
        className={styles.imgAbout}
        src="https://imgs.search.brave.com/b9YHYdX0TozdlG7DjpC67VZnAarkG6JUardKjVStnnc/rs:fit:1200:1080:1/g:ce/aHR0cDovL2Nkbi5j/b2xsaWRlci5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDMvYWR1bHQtc3dp/bS1mZXN0aXZhbC1y/aWNrLWFuZC1tb3J0/eS1ydW4tdGhlLWpl/d2Vscy5qcGc"
        alt="RickAndMorty"
      />
      <p>
        Descripción del trabajo realizado:
        <br />
        <br />
        Aplicación de Rick y Morty creada con React para la integración de lo
        aprendido en el BootCamp{" "}
        <a
          className={styles.linkHenry}
          href="https://www.soyhenry.com/"
          target={"_blank"}
          rel="noreferrer"
        >
          Henry
        </a>
        .<br /> <br />
        La interfaz permite a los usuarios buscar los personajes de la serie por
        id, seleccionarlos y ver su descripción. <br />
        <br />
        La sección detallada de personajes incluye información de cada uno de
        ellos, como nombre, especie, género y su origen de aparición.
      </p>
    </div>
  );
}
