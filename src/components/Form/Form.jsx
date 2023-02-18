import React from "react";
import { validate } from "./validation";
import styles from "../Form/Form.module.css";

export default function Form({ login }) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });
  const [errors, setError] = React.useState({});

  function handleInputChange(e) {
    setError(validate({ ...userData, [e.target.name]: e.target.value }));
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(userData);
  }

  return (
    <div>
      <h1>Login</h1>
      <form className={styles.containerForm} onSubmit={handleSubmit}>
        <div className={styles.divForm}>
          <label htmlFor="username" className={styles.labelForm}>
            Username:{" "}
          </label>
          <input
            className={styles.inputForm}
            type="text"
            name="username"
            onChange={handleInputChange}
            value={userData.username}
          />
          <p>{errors.username}</p>
        </div>
        <div className={styles.divForm}>
          <label htmlFor="username" className={styles.labelForm}>
            Password:{" "}
          </label>
          <input
            className={styles.inputForm}
            type="password"
            name="password"
            onChange={handleInputChange}
            value={userData.password}
          />
          <p>{errors.password}</p>
        </div>
        <button type="submit" className={styles.buttonForm}>
          Ingresar
        </button>
      </form>
    </div>
  );
}
