import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";
import Quads from "./pages/Quads";
import AddQuad from "./pages/AddQuad";
import EditQuad from "./pages/EditQuad";

import QuadProvider from "./context/QuadContext";

export default function App() {
  return (
    <QuadProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/quads" element={<Quads />} />
          <Route path="/add" element={<AddQuad />} />
          <Route path="/edit/:id" element={<EditQuad />} />
        </Routes>
      </BrowserRouter>
    </QuadProvider>
  );
}