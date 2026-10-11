
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { SettingsProvider } from "./context/SettingsContext";


function Portfolio() {
  return (
    <div className="theme-page min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <SettingsProvider>
      <Portfolio />
    </SettingsProvider>
  );
}

export default App;
