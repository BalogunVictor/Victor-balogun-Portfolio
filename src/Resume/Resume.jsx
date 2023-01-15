import './resume.scss'
import { motion } from 'framer-motion';

import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

// import { ToolbarSlot, TransformToolbarSlot } from '@react-pdf-viewer/toolbar';




const Resume = () => {

  const variants = {
    hidden: { opacity: 0},
    enter: { opacity: 1},
    exit: { opacity: 0},
  };




// const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;
 
  return (

//     // Override the `NumberOfPages` slot
//     Object.assign({}, slot, {
//       NumberOfPages: () => (
//           <>
//               of <NumberOfPages />
//           </>
//       ),
//   });
// };


    <motion.div
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: 'linear' }} // Set the transition to linear
      className="resume"
      >
        <h1>Resumé</h1>

        <div className='resumeViewer'
        style={{
          border: '5px solid rgba(0, 0, 0, 0.3)',
          height: '750px',
          width: '750px',
          
      }}
        >
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
                <Viewer fileUrl="/Assets/resume/VICTOR BALOGUN-CV.pdf"
                />
              </Worker>
            </div>
    </motion.div>
  )
}

export default Resume