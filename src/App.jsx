import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from './components/Navbar/Navbar'
import { Home } from "./components/Home/Home";
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact"

export const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
