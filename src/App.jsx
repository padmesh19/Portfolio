import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createContext } from "react";
import data from "./data";
import { ToastContainer } from "react-toastify";

export const AppContext = createContext();

function App() {
  return (
    <BrowserRouter>
      <AppContext.Provider value={data} className="App w-full bg-gray-700">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
