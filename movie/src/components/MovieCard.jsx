import { Link } from "react-router-dom";
import placeholderPoster from "../assets/placeholder-poster.png";

export default function MovieCard({ movie }) {
  const poster =
    movie.Poster && movie.Poster !== "N/A" ? movie.Poster : placeholderPoster;

  return (
    <Link
      to={`/movie/${movie.imdbID}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        border: "1px solid #444",
        borderRadius: 12,
        overflow: "hidden",
        display: "block",
      }}
    >
      <img
        src={poster}
        alt={movie.Title}
        style={{
          width: "100%",
          height: 260,
          objectFit: "cover",
          display: "block",
        }}
      />

      <div style={{ padding: 12 }}>
        <div style={{ fontWeight: 700 }}>{movie.Title}</div>
        <div style={{ opacity: 0.8 }}>
          {movie.Year} • {movie.Type}
        </div>
      </div>
    </Link>
  );
}
