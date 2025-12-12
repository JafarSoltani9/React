const BASE_URL = "https://www.omdbapi.com/";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function searchMovies(query, page = 1) {
  if (!API_KEY) {
    throw new Error("Missing OMDb API key. Add VITE_OMDB_API_KEY to your .env file.");
  }

  const q = query.trim();
  if (!q) return { movies: [], totalResults: 0, error: "Please type something to search." };

  const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(q)}&page=${page}`;
  const data = await fetchJson(url);

  if (data.Response === "False") {
    return { movies: [], totalResults: 0, error: data.Error || "No results found." };
  }

  return {
    movies: Array.isArray(data.Search) ? data.Search : [],
    totalResults: Number(data.totalResults || 0),
    error: null,
  };
}

export async function getMovieDetails(imdbID) {
  if (!API_KEY) {
    throw new Error("Missing OMDb API key. Add VITE_OMDB_API_KEY to your .env file.");
  }

  const url = `${BASE_URL}?apikey=${API_KEY}&i=${encodeURIComponent(imdbID)}&plot=full`;
  const data = await fetchJson(url);

  if (data.Response === "False") {
    throw new Error(data.Error || "Could not fetch movie details.");
  }

  return data;
}
