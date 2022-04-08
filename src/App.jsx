import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import useLocalStorage from "use-local-storage";

import "./App.css";

export const App = () => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "ligth");

  const handleDarkMode = () => {
    const newTheme = theme === "ligth" ? "dark" : "ligth";
    setTheme(newTheme);
  };

  return (
    <div className="container" data-theme={theme}>
      <Navbar
        themeHandle={handleDarkMode}
        handleTheme={handleDarkMode}
        theme={theme}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
