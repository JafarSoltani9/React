import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import StatusMessage from "../components/StatusMessage";
import { searchMovies } from "../services/movieApi";
import styles from "./SearchPage.module.css";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  function handleQueryChange(value) {
    setQuery(value);

    // If the input is cleared, reset UI + results
    if (value.trim() === "") {
      setMovies([]);
      setError(null);
      setHasSearched(false);
      setLoading(false);
    }
  }

  async function handleSearch() {
    const q = query.trim();
    if (!q) {
      // If user clicks Search with empty input, just reset
      setMovies([]);
      setError(null);
      setHasSearched(false);
      setLoading(false);
      return;
    }

    setHasSearched(true);
    setLoading(true);
    setError(null);

    try {
      const result = await searchMovies(q);
      setMovies(result.movies);
      setError(result.error);
    } catch (e) {
      setMovies([]);
      setError(e?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  const status =
    loading ? { type: "loading", msg: "Fetching movies..." } :
    error ? { type: "error", msg: error } :
    hasSearched && movies.length === 0 ? { type: "empty", msg: "No results found." } :
    !hasSearched ? { type: "info", msg: "Search for a movie to get started." } :
    null;

  return (
  <div className={styles.page}>
    <div className={styles.header}>
      <h1 className={styles.title}>Movie Search</h1>
      <div className={styles.subtitle}>
        Search movies and click to view details.
      </div>
    </div>

    <SearchBar
      query={query}
      onQueryChange={handleQueryChange}
      onSearch={handleSearch}
      disabled={loading}
    />

    {status && <StatusMessage type={status.type} message={status.msg} />}

    {movies.length > 0 && <MovieList movies={movies} />}
  </div>
);
}
