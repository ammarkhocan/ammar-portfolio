import styles from "./HeroStyle.module.css";
import heroImg from "../../assets/amar.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import instagramLight from "../../assets/instagram-light.svg";
import instagramDark from "../../assets/instagram-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const instagramIcon = theme === "light" ? instagramLight : instagramDark;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      {/* <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profil picture" />
      </div> */}
      <div className={styles.info}>
        <h1>Ammar Ismail Khocan</h1>
        <h2>Web Developer</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/ammarismailkhocan/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://www.instagram.com/ammarkhocan/" target="_blank">
            <img src={instagramIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/ammarkhocan" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
        </span>
        <p className={styles.description}>
          Enthusiastic about learning and developing modern web applications
          using React and JavaScript. Continuously improving my skills in
          frontend and backend development.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
