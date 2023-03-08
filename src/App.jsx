import React from "react";
import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Contact2 from "./components/Contact copy";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Particles />
      <main className="bg-main-color text-secondary-accent-color  font-body">
        <Navbar />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Contact2 />
        <Footer />
      </main>
    </>
  );
}

export default App;
