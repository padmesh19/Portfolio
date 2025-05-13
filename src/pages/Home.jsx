import React from "react";
import Header from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skill from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="max-w-screen-2xl transition-all mx-auto min-h-screen m-0">
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
