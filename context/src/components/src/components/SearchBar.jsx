export default function SearchBar({ query, setQuery }) {
  return (
    <input
      placeholder="Search quad bikes..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="search"
    />
  );
}