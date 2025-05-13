import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Home from "./pages/Home";
import Header from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <div className="App w-full scroll-smooth">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="certifications" element={<Certifications />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
