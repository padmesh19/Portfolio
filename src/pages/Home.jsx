import Hero from "../components/Hero";
import About from "../components/About";
import Skill from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="max-w-[2560px] transition-all scroll-smooth mx-auto min-h-screen m-0">
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
