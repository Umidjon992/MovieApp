import MovieCard from "./MovieCard";

export default function MovieList({ movies, onDelete }) {
  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}