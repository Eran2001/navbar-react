import { useState } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>

      {!isMobile && (
        <div className="close-icon" onClick={toggleMobileMenu}>
          <FaAlignLeft />
        </div>
      )}

      {isMobile && (
        <div className="close-icon" onClick={closeMobileMenu}>
          <TfiClose />
        </div>
      )}

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
