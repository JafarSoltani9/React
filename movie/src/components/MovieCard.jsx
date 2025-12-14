import { Link } from "react-router-dom";
import placeholderPoster from "../assets/placeholder-poster.png";
import styles from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
  const poster =
    movie.Poster && movie.Poster !== "N/A" ? movie.Poster : placeholderPoster;

  return (
    <Link to={`/movie/${movie.imdbID}`} className={styles.card}>
      <img src={poster} alt={movie.Title} className={styles.poster} />

      <div className={styles.body}>
        <div className={styles.title}>{movie.Title}</div>
        <div className={styles.meta}>
          {movie.Year} • {movie.Type}
        </div>
      </div>
    </Link>
  );
}
