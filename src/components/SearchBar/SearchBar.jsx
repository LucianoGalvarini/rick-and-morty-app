import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  return (
    <div className={styles.divSearchBar}>
      <input type="search" id="searchInput" />
      <button
        onClick={() => {
          const inputValue = document.getElementById("searchInput").value;
          props.onSearch(inputValue);
        }}
      >
        Agregar
      </button>
    </div>
  );
}
