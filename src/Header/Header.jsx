import './Header.scss';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerWrapper">
        <Link  to="/" className="link">Home</Link>
        <Link to="/projects" className="link">Projects</Link>
        <Link to="/aboutme" className="link">About Me</Link>
      </div>
      <hr className='headerHr' />
    </div>
    
  )
}

export default Header