export default function MovieCard({ movie, onDelete }) {
  return (
    <div className="card">
  <img src={movie.Poster} alt={movie.Title} />

  <div className="card-overlay">
    <div className="card-body">
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button onClick={() => onDelete(movie.imdbID)}>
        Delete
      </button>
    </div>
  </div>
</div>
  );
}