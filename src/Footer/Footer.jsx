import './footer.scss'
import {AiOutlineGithub,AiOutlineTwitter} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {

  return (
    <div className="footer">
      <div className="footerWrapper"> 
      <div className="icons">
      <ul>
        <li>
          <a href="https://github.com/BalogunVictor">
            <AiOutlineGithub style={{fontSize: '25px'}} className='icon'/>
          </a>
        </li>

        <li >
          <a href="https://www.linkedin.com/in/balogun(moyinoluwa)victor">
            <BsLinkedin style={{fontSize: '25px'}} className='icon'/>
          </a>
        </li>

        <li>
          <a href="https://twitter.com/blvckaddiict">
            <AiOutlineTwitter style={{fontSize: '25px'}} className='icon'/>
          </a>
        </li>
      </ul>
      </div>

      <div className="vl"></div>
        
      </div>
    </div>
    
   
  )
}

export default Footer