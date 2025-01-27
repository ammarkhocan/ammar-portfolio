import style from "./HeroStyle.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section id="hero" className={style.container}>
      <div className={style.colorModelContainer}>
        <img className={style.hero} src={heroImg} alt="Profil picture" />
        <img
          className={style.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={style.info}>
        <h1>
          Ammar Ismail <br /> Khocan
        </h1>
        <h2>Front End Developer</h2>
        <span>
          <a href="" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p>
          With a passion developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
