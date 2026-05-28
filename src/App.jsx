import { useState, useEffect } from "react";
import Navbar from "./Component/Navbar";
import "./index.css";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import BackToTop from "./Component/BackToTop";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-[var(--bg_dark)] text-white"
          : "bg-[var(--bg_light)] text-black"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Project darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      <BackToTop />
    </div>
  );
};

export default App;
