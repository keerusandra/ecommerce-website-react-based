import { useState } from "react";
import { useQuads } from "../context/QuadContext";
import QuadCard from "../components/QuadCard";
import SearchBar from "../components/SearchBar";

export default function Quads() {
  const { quads } = useQuads();
  const [query, setQuery] = useState("");

  const filtered = quads.filter((q) =>
    q.name.toLowerCase().includes(query.toLowerCase()) ||
    q.brand.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="page">
      <h2>Inventory</h2>

      <SearchBar query={query} setQuery={setQuery} />

      <div className="grid">
        {filtered.map((quad) => (
          <QuadCard key={quad.id} quad={quad} />
        ))}
      </div>
    </div>
  );
}