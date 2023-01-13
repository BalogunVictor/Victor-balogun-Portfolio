import './skill.scss';


const Skill = ({skill}) => {
  return (
    <div className='skill'>
      <div className="skillWrapper">
        <div className="skillLogo">
          <img src={skill.logo} alt="skillLogo" />
        </div>
        <div className="skillName">
          {skill.name}
        </div>
      </div>
    </div>
  )
}

export default Skill