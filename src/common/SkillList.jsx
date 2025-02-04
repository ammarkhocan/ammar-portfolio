function SkillList({ src, skill }) {
  return (
    <span className="skillItem">
      <img src={src} alt={skill} className="skillIcon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
