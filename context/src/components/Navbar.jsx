import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Quad Admin</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/quads">Quads</Link>
        <Link to="/add">Add Quad</Link>
      </div>
    </nav>
  );
}