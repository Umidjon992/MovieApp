import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import "./index.css";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchMovies = async () => {
    if (!query) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );
      const data = await res.json();

      if (data.Response === "False") {
        setError("Movie not found");
        setMovies([]);
      } else {
        setMovies(data.Search);
      }
    } catch {
      setError("Error...");
    }

    setLoading(false);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((m) => m.imdbID !== id));
  };

  return (
    <div className="app">
      <Header query={query} setQuery={setQuery} onSearch={searchMovies} />

      <Hero />

      <main className="main">
        {loading && <p className="info">Loading...</p>}
        {error && <p className="error">{error}</p>}

        <MovieList movies={movies} onDelete={deleteMovie} />
      </main>

      <Footer />
    </div>
  );
}