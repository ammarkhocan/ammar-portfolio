import "./App.css";
import BackToTop from "./common/Backtotop/BackToTop";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Navbar from "./sections/Navbar/Navbar";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
      <Toaster /> {/* Add this line */}
    </>
  );
}

export default App;
