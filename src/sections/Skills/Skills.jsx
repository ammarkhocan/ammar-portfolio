import styles from "./SkillsStyles.module.css";
import SkillList from "../../common/SkillList";

// Import gambar skill dari assets
import htmlIcon from "../../assets/skills/html.png";
import cssIcon from "../../assets/skills/css.png";
import jsIcon from "../../assets/skills/js.png";
import reactIcon from "../../assets/skills/react.png";
import nodeIcon from "../../assets/skills/node.png";
import expresIcon from "../../assets/skills/express.png";
import bootstrapIcon from "../../assets/skills/bootstrap.png";
import tailwindIcon from "../../assets/skills/tailwind.png";
import mysqlIcon from "../../assets/skills/MySQL.png";
import gitIcon from "../../assets/skills/git.png";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <p className={styles.description}>
        The skills, tools, and technologies I'm really good at:
      </p>

      <div className={styles.skillGrid}>
        <SkillList src={htmlIcon} skill="HTML" />
        <SkillList src={cssIcon} skill="CSS" />
        <SkillList src={jsIcon} skill="JavaScript" />
        <SkillList src={reactIcon} skill="React" />
        <SkillList src={nodeIcon} skill="Node.js" />
        <SkillList src={expresIcon} skill="Express" />
        <SkillList src={bootstrapIcon} skill="Bootstrap" />
        <SkillList src={tailwindIcon} skill="Tailwind" />
        <SkillList src={mysqlIcon} skill="MySQL" />
        <SkillList src={gitIcon} skill="Git" />
      </div>
    </section>
  );
}
export default Skills;
