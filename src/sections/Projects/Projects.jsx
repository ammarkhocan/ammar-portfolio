import React from "react";
import ProjectCard from "../../common/Card/ProjectCard";
import styles from "./ProjectsStyle.module.css";
import gambar1 from "../../assets/vertigrow.png";
import gambar2 from "../../assets/notes.png";
import gambar3 from "../../assets/fun.png";

const projects = [
  {
    title: "Vetigrow",
    image: gambar1,
    description: "Education Website",
    link: "https://github.com/VertiGrow-IL",
  },
  {
    title: "Personal Notes",
    image: gambar2,
    description: "Note-Taking App",
    link: "https://github.com/ammarkhocan/notes-react",
  },
  {
    title: "English Fun",
    image: gambar3,
    description: "Education landing Page",
    link: "https://ammarkhocan.github.io/submission-web-dasar/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
