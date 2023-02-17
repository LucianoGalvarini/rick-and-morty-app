import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import styles from "./Nav.module.css";

const Nav = ({ asd }) => {
  return (
    <div className={styles.divNav}>
      <div className={styles.divSearchBar}>
        <SearchBar asd={asd} />
      </div>
    </div>
  );
};

export default Nav;
