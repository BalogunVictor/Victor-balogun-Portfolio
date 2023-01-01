import './main.scss'
import {FaArrowDown} from "react-icons/fa"
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='main'>
      <div className="mainWrapper">
       <div className="mainHeader">
          <h1>Welcome.</h1>
        </div>
        <div className="maintext">
          <h1>I'm Victor Balogun</h1>
          <p>a frontend developer based in Lagos, Nigeria. I've worked on quality,<br/>  responsive websites with exceptional user experience</p>
          <p>I love using my skill set to simplify work for enterprises. <br/>View my <FaArrowDown className='arrowDown'/> </p>
          </div>
              <div className="options">
                <Link to='/resume' className="option">Resume</Link>
                <Link to='/projects' className="option">Projects</Link>
                <Link to='/aboutme' className="option">About Me</Link>
              </div>
          </div>
      </div>
  )
}

export default Main