import { Link } from "react-router-dom";
import { useQuads } from "../context/QuadContext";

export default function QuadCard({ quad }) {
  const { deleteQuad } = useQuads();

  return (
    <div className="card">
      <img src={quad.image} alt={quad.name} />

      <h3>{quad.name}</h3>
      <p>{quad.brand}</p>
      <p>${quad.price}</p>

      <div className="actions">
        <Link to={`/edit/${quad.id}`}>Edit</Link>
        <button onClick={() => deleteQuad(quad.id)}>Delete</button>
      </div>
    </div>
  );
}