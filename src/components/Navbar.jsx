import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">

      {/* LEFT: Name */}
      <h2 className="logo">Laxmi Mangal</h2>

      {/* RIGHT: Menu + Icons */}
      <div className="right-section">

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-icons">
          <a href="https://www.linkedin.com/in/laxmi-mangal-5255593ba" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/laxmimangal07" target="_blank">
            <FaGithub />
          </a>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;