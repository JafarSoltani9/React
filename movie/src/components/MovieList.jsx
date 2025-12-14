import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";

export default function MovieList({ movies }) {
  if (!movies || movies.length === 0) return null;

  return (
    <div className={styles.grid}>
      {movies.map((m) => (
        <MovieCard key={m.imdbID} movie={m} />
      ))}
    </div>
  );
}
