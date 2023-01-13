import './projects.scss'
import {projects} from '../Data'
import Project from '../Project/Project'
import { motion } from 'framer-motion'

const Projects = () => {
  const variants = {
    hidden: { opacity: 0},
    enter: { opacity: 1},
    exit: { opacity: 0},
  };

  return (
    <motion.div
    variants={variants} // Pass the variant object into Framer Motion
    initial="hidden" // Set the initial state to variants.hidden
    animate="enter" // Animated state to variants.enter
    exit="exit" // Exit state (used later) to variants.exit
    transition={{ type: 'linear' }} // Set the transition to linear
    className='projects'>
      <div className="projectsWrapper">
        <h1 className='Title'>Projects.</h1>
      {projects.map((p) => (
        <Project key={p.id} project={p} />
      ))}
      </div>
    </motion.div>
  )
}

export default Projects