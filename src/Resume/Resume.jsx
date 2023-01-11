import './resume.scss'
import { motion } from 'framer-motion';

const Resume = () => {

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
    className="resume"
    >Resumé
    
    </motion.div>
  )
}

export default Resume