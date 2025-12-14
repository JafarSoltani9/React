import styles from "./SearchBar.module.css";

export default function SearchBar({ query, onQueryChange, onSearch, disabled }) {
  function handleKeyDown(e) {
    if (e.key === "Enter") onSearch();
  }

  return (
    <div className={styles.row}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search movies... (e.g. Batman)"
      />

      <button
        className={styles.button}
        onClick={onSearch}
        disabled={disabled}
      >
        Search
      </button>
    </div>
  );
}
