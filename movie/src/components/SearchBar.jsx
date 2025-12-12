export default function SearchBar({ query, onQueryChange, onSearch, disabled }) {
  function handleKeyDown(e) {
    if (e.key === "Enter") onSearch();
  }

  return (
    <div style={{ display: "flex", gap: 8, margin: "12px 0" }}>
      <input
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search movies... (e.g. Batman)"
        style={{
          flex: 1,
          padding: 10,
          borderRadius: 8,
          border: "1px solid #444",
        }}
      />

      <button
        onClick={onSearch}
        disabled={disabled}
        style={{
          padding: "10px 14px",
          borderRadius: 8,
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
}
