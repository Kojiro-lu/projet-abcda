import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import ProjectPage from "./pages/ProjectPage/ProjectPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/:id" element={<ProjectPage />} />
        <Route path="/404" element={<h2>Projet introuvable</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
