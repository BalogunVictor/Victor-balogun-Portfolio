import './Header.scss';
import { Link} from "react-router-dom";
import { useState } from 'react';
import {RiMenu4Line} from 'react-icons/ri';
import {GrClose} from 'react-icons/gr'

const Header = () => {

  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="headerWrapper">

        <Link  to="/" className="logo"> victor.Balogun/></Link>

        <div className={clicked ? "nav active" : "nav"}>

          <div className="menuIcon" onClick={handleClicked}>
            <div className="menuIconWrapper">
            {clicked ? <GrClose  className='close'/> : <RiMenu4Line className='open' />}
            </div>
          </div>
          <div onClick={handleClicked} className="links">
            <Link to="/" className="link">Home</Link>
            <Link to="/projects" className="link">Projects</Link>
            <Link  to="/aboutme" className="link">About Me</Link>
          </div>
        </div>
      </div>
      <hr className='headerHr' />
    </div>
    
  )
}

export default Header