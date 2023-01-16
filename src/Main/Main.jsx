import './main.scss'
import { ArrowDownButton, CustomButton } from '../Button/Button'
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
          <p>I love using my skill set to simplify work for enterprises. <br/>View my <ArrowDownButton/> </p>
          </div>
              <div className="options">
                <Link to='/resume' className="option">
                <CustomButton>Resume</CustomButton>
                </Link>
                <Link to='/aboutme'>
                <CustomButton>About</CustomButton>
                </Link>
                <Link to='/projects' className="option">
                <CustomButton>Projects</CustomButton>
                </Link>
              </div>
          </div>
      </div>
  )
}

export default Main