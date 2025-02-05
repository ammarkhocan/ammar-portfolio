// src/sections/Navbar/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./NavbarStyle.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { useTheme } from "../../common/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo sebagai Home */}
      <Link to="hero" smooth={true} duration={500} className={styles.logo}>
        Markho.
      </Link>

      {/* Tombol Menu Mobile */}
      <button className={styles.toggleButton} onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Menu Navigasi */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li>
          <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Tombol Color Mode */}
      <img
        className={styles.themeButton}
        src={themeIcon}
        alt="Color mode icon"
        onClick={toggleTheme}
      />
    </nav>
  );
};

export default Navbar;
