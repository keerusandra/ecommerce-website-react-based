import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuads } from "../context/QuadContext";

export default function AddQuad() {
  const { addQuad } = useQuads();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    brand: "",
    price: "",
    engine: "",
    type: "",
    image: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addQuad({ ...form, price: Number(form.price) });
    navigate("/quads");
  };

  return (
    <div className="page">
      <h2>Add Quad Bike</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
        <input placeholder="Brand" onChange={e => setForm({...form, brand: e.target.value})} />
        <input placeholder="Price" type="number" onChange={e => setForm({...form, price: e.target.value})} />
        <input placeholder="Engine" onChange={e => setForm({...form, engine: e.target.value})} />
        <input placeholder="Type" onChange={e => setForm({...form, type: e.target.value})} />
        <input placeholder="Image URL" onChange={e => setForm({...form, image: e.target.value})} />

        <button>Add Quad</button>
      </form>
    </div>
  );
}