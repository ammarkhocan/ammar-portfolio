import styles from "./ProjectCard.module.css";
import { useTheme } from "../ThemeContext"; // Import ThemeContext

const ProjectCard = ({ title, image, description, link }) => {
  const { theme } = useTheme(); // Ambil tema dari context

  return (
    <div
      className={`${styles.card} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <img src={image} alt={title} className={styles.projectImage} />
      <div
        className={`${styles.cardContent} ${
          theme === "dark" ? styles.darkContent : styles.lightContent
        }`}
      >
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
        <a
          href={link}
          className={styles.cardLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
          <i className="bx bx-link-external"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
