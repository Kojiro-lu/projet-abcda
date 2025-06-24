import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import ProjectPage from "./pages/ProjectPage/ProjectPage.jsx";
import AllProjectsPage from "./pages/AllProjectPage/AllProjectsPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contact from "./components/Contact/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/:id" element={<ProjectPage />} />
        <Route path="/projets" element={<AllProjectsPage />} />
        <Route path="/404" element={<h2>Projet introuvable</h2>} />
      </Routes>
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
