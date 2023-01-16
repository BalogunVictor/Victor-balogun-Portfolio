import './aboutMe.scss'
import { motion } from 'framer-motion'
import Skills from "../Skills/Skills";
import { skills } from '../Data';


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const AboutMe = () => {

  const variants = {
    hidden: { opacity: 0},
    enter: { opacity: 1},
    exit: { opacity: 0},
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  
  return (
    <motion.div
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: 'linear' }} // Set the transition to linear
      className="aboutMe"
      >
      <h1 className='Title'>About Me.</h1>
      <div className="aboutMeWrapper">
          <div className="aboutMeimage">
            <img src="/Assets/victor.PNG" alt="victorImage" />
          </div>
          <div className="aboutMetext">
          <p>Hi! my name is Victor Balogun, I'm a frontend developer based in Lagos, Nigeria.I've worked on quality,  
          responsive web applications with exceptional user experience. I'm very passionate and dedicated to my work, 
          I love using my skill set to simplify work for enterprises and learning new technologies along side design trends.
          I have acquired the skills necessary to build a great and premium web application.
          </p>
          </div>
        </div>
        <div className="mySkills">
         <h1>My skills</h1>
          <div className="mySkillsWrapper">
            <Carousel 
            responsive={responsive}
            showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1500}
            >

              {skills.map((s) => (
                <Skills key={s.id} skill={s} />
              ))}
            </Carousel>
          </div>
        </div>
    </motion.div>
  )
}

export default AboutMe