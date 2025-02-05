import React from "react";
import ProjectCard from "../../common/Card/ProjectCard";
import styles from "./ProjectsStyle.module.css";
import gambar2 from "../../assets/vertigrow.png";

const projects = [
  {
    title: "Vetigrow",
    image: gambar2,
    description: "Education Website",
    link: "https://github.com/VertiGrow-IL",
  },
  {
    title: "Vetigrow",
    image: gambar2,
    description: "Streaming App",
    link: "https://www.google.co.uk/",
  },
  {
    title: "Vetigrow",
    image: gambar2,
    description: "Streaming App",
    link: "https://www.google.co.uk/",
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
