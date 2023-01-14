import './skills.scss';


const Skills = ({ skill }) => {
  return (
    <div className='skills'>
      <div className="skillsWrapper">
        <div className="skillsLogo">
          <img src={skill.logo} alt="skillsLogo" />
        </div>
        <div className="skillsName">
          {skill.name}
        </div>
      </div>
    </div>
  )
}

export default Skills