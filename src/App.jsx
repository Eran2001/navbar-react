import { useState } from "react";
import { FaBars } from "react-icons/fa";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>

      <div className="burger-icon" onClick={toggleMobileMenu}>
        <FaBars />
      </div>

      <ul className={`nav-links ${isMobile ? "active" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default App;
