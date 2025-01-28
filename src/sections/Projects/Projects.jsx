import styles from "./ProjectsStyle.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link={"https://www.google.co.uk/"}
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={viberr}
          link={"https://www.google.co.uk/"}
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={viberr}
          link={"https://www.google.co.uk/"}
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={viberr}
          link={"https://www.google.co.uk/"}
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={viberr}
          link={"https://www.google.co.uk/"}
          h3="Viberr"
          p="Streaming App"
        />
      </div>
    </section>
  );
}

export default Projects;
