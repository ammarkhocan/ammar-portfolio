import React, { useState, useEffect } from "react";
import styles from "./BackToTop.module.css";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${styles.backToTop} ${visible ? styles.show : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="bx bx-chevron-up-circle"></i>{" "}
      {/* Gunakan ikon dari Boxicons */}
    </button>
  );
};

export default BackToTop;
