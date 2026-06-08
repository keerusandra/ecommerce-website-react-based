import { createContext, useContext, useState } from "react";

const QuadContext = createContext();

export const useQuads = () => useContext(QuadContext);

export default function QuadProvider({ children }) {
  const [quads, setQuads] = useState([
    {
      id: 1,
      name: "Yamaha Raptor 700R",
      brand: "Yamaha",
      price: 9800,
      engine: "686cc",
      type: "Sport",
      image: "https://images.unsplash.com/photo-quad1"
    }
  ]);

  // CREATE
  const addQuad = (quad) => {
    setQuads([...quads, { ...quad, id: Date.now() }]);
  };

  // UPDATE
  const updateQuad = (id, updatedQuad) => {
    setQuads(
      quads.map((q) => (q.id === id ? { ...q, ...updatedQuad } : q))
    );
  };

  // DELETE
  const deleteQuad = (id) => {
    setQuads(quads.filter((q) => q.id !== id));
  };

  return (
    <QuadContext.Provider
      value={{ quads, addQuad, updateQuad, deleteQuad }}
    >
      {children}
    </QuadContext.Provider>
  );
}