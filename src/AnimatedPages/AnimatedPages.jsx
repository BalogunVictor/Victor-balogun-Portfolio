import { Routes, Route, useLocation } from "react-router-dom";
import  Homepage  from '../Homepage/Homepage'
import AboutMe from '../About-Me/AboutMe';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import { AnimatePresence } from "framer-motion";

const AnimatedPages = () => {
  const location = useLocation(); 
  return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname} >
          <Route path="/" exact element={  <Homepage />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </AnimatePresence>
  )
}

export default AnimatedPages