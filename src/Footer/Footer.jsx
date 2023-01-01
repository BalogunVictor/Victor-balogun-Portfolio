import './footer.scss'
import {AiOutlineGithub,AiOutlineTwitter} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {

  return (
    <div className="footer">
      <div className="footerWrapper"> 
      <div className="icons">
      <ul>
        <li style={{listStyle: 'none' }}>
          <a href="https://github.com/agboolaidris">
            <AiOutlineGithub style={{fontSize: '25px'}} className='icon'/>
          </a>
        </li>

        <li style={{listStyle: 'none'}}>
          <a href="https://www.linkin.com/in/balogun-victor-moyinoluwa">
            <BsLinkedin style={{fontSize: '25px'}} className='icon'/>
          </a>
        </li>

        <li style={{listStyle: 'none'}}>
          <a href="https://github.com/agboolaidris">
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