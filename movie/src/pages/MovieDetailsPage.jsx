import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieDetails } from "../services/movieApi";
import placeholderPoster from "../assets/placeholder-poster.png";
import StatusMessage from "../components/StatusMessage";

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
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 18 }}>
      <Link to="/" style={{ display: "inline-block", marginBottom: 12 }}>
        ← Back
      </Link>

      {loading && (
        <StatusMessage type="loading" message="Fetching details..." />
      )}
      {error && <StatusMessage type="error" message={error} />}

      {movie && !loading && !error && (
        <div
          style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 16 }}
        >
          <img
            src={poster}
            alt={movie.Title}
            style={{
              width: "100%",
              borderRadius: 12,
              border: "1px solid #444",
            }}
          />

          <div>
            <h1 style={{ marginTop: 0 }}>
              {movie.Title} ({movie.Year})
            </h1>
            <div style={{ opacity: 0.85, marginBottom: 10 }}>
              {movie.Genre} • {movie.Runtime} • IMDb: {movie.imdbRating}
            </div>
            <p style={{ lineHeight: 1.6 }}>{movie.Plot}</p>

            <div style={{ marginTop: 12, opacity: 0.9 }}>
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
