import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Ofertas from "./pages/Ofertas";
import Supermercados from "./pages/Supermercados";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";




export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/supermercados" element={<Supermercados />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
