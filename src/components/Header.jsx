export default function Header({ query, setQuery, onSearch }) {
  return (
    <header className="header">
      <h1>🎬 MovieApp</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={onSearch}>Search</button>
      </div>
    </header>
  );
}