import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import ProjectPage from "./pages/ProjectPage/ProjectPage.jsx";
import AllProjectsPage from "./pages/AllProjectPage/AllProjectsPage.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/:id" element={<ProjectPage />} />
        <Route path="/projets" element={<AllProjectsPage />} />
        <Route path="/404" element={<h2>Projet introuvable</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
