import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieDetails } from "../services/movieApi";
import placeholderPoster from "../assets/placeholder-poster.png";
import StatusMessage from "../components/StatusMessage";
import styles from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await getMovieDetails(imdbID);
        if (alive) setMovie(data);
      } catch (e) {
        if (alive) setError(e?.message || "Could not load movie details.");
      } finally {
        if (alive) setLoading(false);
      }
    }

    load();
    return () => {
      alive = false;
    };
  }, [imdbID]);

  const poster =
    movie?.Poster && movie.Poster !== "N/A" ? movie.Poster : placeholderPoster;

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.backLink}>
        ← Back
      </Link>

      {loading && <StatusMessage type="loading" message="Fetching details..." />}
      {error && <StatusMessage type="error" message={error} />}

      {movie && !loading && !error && (
        <div className={styles.layout}>
          <img src={poster} alt={movie.Title} className={styles.poster} />

          <div>
            <h1 className={styles.title}>
              {movie.Title} ({movie.Year})
            </h1>

            <div className={styles.meta}>
              {movie.Genre} • {movie.Runtime} • IMDb: {movie.imdbRating}
            </div>

            <p className={styles.plot}>{movie.Plot}</p>

            <div className={styles.extra}>
              <div>
                <b>Director:</b> {movie.Director}
              </div>
              <div>
                <b>Actors:</b> {movie.Actors}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
