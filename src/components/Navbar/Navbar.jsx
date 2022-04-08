import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = ({ theme, handleTheme }) => {
  return (
    <div className="nav-container">
      <div className="name-container">
        <h1 className="name">Julian Orozco</h1>
      </div>
      <div className="theme-button" onClick={handleTheme}>
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </div>
      <div className="link-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
            <li>
              <Link to="/contact">Contact </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
