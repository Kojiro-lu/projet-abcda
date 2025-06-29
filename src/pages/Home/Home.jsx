import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Cyril Bettremieux et ABCDA - Spécialiste dans la rénovation,
          l’extension ou la construction en Bretagne.
        </title>
        <meta
          name="description"
          content="Cyril Bettremieux, architecte DPLG à la tête d'ABCDA, vous accompagne dans la rénovation, l’extension ou la construction de votre maison en Bretagne."
        />
      </Helmet>

      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
