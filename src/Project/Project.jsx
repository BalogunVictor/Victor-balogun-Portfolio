import './project.scss'
import {ArrowRightButton} from '../Button/Button'

const Project = ({project}) => {
  return (
    <div className='project'>
      <div className="projectWrapper">
      <div className="projectImage">
      <img src={project.images} alt="projectImage" />
      </div>
       
      <div className="projectInfo">
        <h1 className="name">{project.name}</h1>
        <div className="about">{project.about}</div>
        <div className="viewApp">
        <a href={project.link}>View App <ArrowRightButton /> </a>
        </div>
        
      </div>
      </div>
      <hr className='projectHr' />
    </div>
  )
}

export default Project