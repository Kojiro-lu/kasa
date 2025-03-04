import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import FicheLogement from "./pages/Logements/FicheLogement";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<FicheLogement />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
