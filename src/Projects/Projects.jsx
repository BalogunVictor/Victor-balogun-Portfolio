import './projects.scss'
import {projects} from '../Data'
import Project from '../Project/Project'

const Projects = () => {
  return (
    <div className='projects'>
      <div className="projectsWrapper">
        <h1 className='Title'>Projects</h1>
      {projects.map((p) => (
        <Project key={p.id} project={p} />
      ))}
      </div>
    </div>
  )
}

export default Projects