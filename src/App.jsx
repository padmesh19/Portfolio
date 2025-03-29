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
import { useEffect, useState } from "react";

function App() {
  const images = [
    "About-photo.png",
    "css.png",
    "express.png",
    "git.png",
    "html.png",
    "javascript.png",
    "mongodb.png",
    "mongoose.png",
    "mysql.png",
    "nodejs.png",
    "postman.png",
    "Profile_image.jpg",
    "programmer.png",
    "react.png",
    "redux.png",
    "resume.png",
    "tailwind.png",
    "vscode.png",
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const preload = images.map((src) => {
      const img = new Image();
      img.src = src;
      return new Promise((resolve) => {
        img.onload = resolve;
      });
    });

    Promise.all(preload).then(() => setLoaded(true));
  }, []);
  
  return (
    <BrowserRouter>
      {!loaded ? (
        <div className="App w-full max-w-screen-2xl mx-auto min-h-screen m-0 bg-gradient-to-br from-stone-400 dark:from-slate-900 dark:to-slate-700 to-yellow-200 flex justify-center items-center">
          <h1 className="text-2xl text-slate-900 dark:text-slate-100">Loading...</h1>
        </div>
      ) : (
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
      )}
    </BrowserRouter>
  );
}

export default App;
