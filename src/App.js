import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navigation from "./components/navigation";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/experience";
import Project from "./components/Project";
import Footer from "./components/Footer";

function Portfolio() {
  return (
    <div>
      <Navigation />
      <Banner />
      <Skills />
      <About />
      <Experience />
      <Project />
      <Footer />
    </div>
  );
}

export default Portfolio;
