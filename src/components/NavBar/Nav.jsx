import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";

export default function Nav(props) {
  return (
    <div className={styles.containerNav}>
      <SearchBar onSearch={props.onSearch} />
      <Link to="/home">
        <span>Home</span>
      </Link>
      <Link to="/about">
        <span>About</span>
      </Link>
      <Link to="/">
        <span>Logout</span>
      </Link>
    </div>
  );
}
