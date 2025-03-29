import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./components/About";
import Project from "./components/Project";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Skill from "./components/Skills";

function App() {

  return (
    <BrowserRouter>
      <div className="App w-full max-w-screen-2xl mx-auto min-h-screen m-0 bg-gradient-to-br from-stone-400 dark:from-slate-900 dark:to-slate-700 to-yellow-200">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skill />} />
          <Route path="projects" element={<Project />} />
          <Route path="certifications" element={<Certification />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
