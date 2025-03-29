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


const images = [
  "html.png",
  "css.png",
  "tailwind.png",
  "javascript.png",
  "react.png",
  "redux.png",
  "nodejs.png",
  "express.png",
  "mysql.png",
  "mongodb.png",
  "mongoose.png",
  "git.png",
  "postman.png",
  "vscode.png",
];

function App() {
  const [profileImg, setProfileImg] = useState(null);
  const [aboutImg, setAboutImg] = useState(null);
  const [resumeImg, setResumeImg] = useState(null);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const profile = new Image();
    profile.src = "Profile_image.jpg";
    profile.onload = () => setProfileImg(profile.src);

    const about = new Image();
    about.src = "About-photo.png";
    about.onload = () => setAboutImg(about.src);

    const resume = new Image();
    resume.src = "resume.png";
    resume.onload = () => setResumeImg(resume.src);

    const preload = images.map((src) => {
      const img = new Image();
      img.src = src;
      return new Promise((resolve) => {
        img.onload = resolve;
      });
    });
    console.log("hi");

    Promise.all(preload).then(() => setLoaded(true));
  }, []);

  return (
    <BrowserRouter>
      <div className="App w-full max-w-screen-2xl mx-auto min-h-screen m-0 bg-gradient-to-br from-stone-400 dark:from-slate-900 dark:to-slate-700 to-yellow-200">
        <Header />
        <Routes>
          <Route path="/" element={<Hero profileImg={profileImg} />} />
          <Route path="about" element={<About aboutImg={aboutImg}/>} />
          <Route path="skills" element={<Skill loaded={loaded} images={images} />} />
          <Route path="projects" element={<Project />} />
          <Route path="certifications" element={<Certification />} />
          <Route path="contact" element={<Contact resumeImg={resumeImg} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
