import "./Skills.scss";
import { skills } from "../Data";
import Skill from "../Skill/Skill";

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="title">Skills</h1>
      <div className="skillWrapper">
      {skills.map((s) => (
        <Skill key={s.id} skill={s} />
      ))}
      </div>
    </div>
  )
}

export default Skills