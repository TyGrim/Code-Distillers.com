import { Link, NavLink } from 'react-router-dom'
import './main.nav.scss'
import LogoSubtitle from '../../assets/Logo-Code-Distillers/sub-Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <div className="nav-bar">
      <div className="logo-nav">
      <Link className="logo" to="/">
        <img src={LogoSubtitle} alt="logo" />
      </Link>
      </div>
      <nav>
        <NavLink 
        exact="true" 
        activeclassname="active" 
        to="/">
          <FontAwesomeIcon icon={faHome} color="#76a0b8" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#76a0b8" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#76a0b8" />
        </NavLink>
      </nav>
    </div>
  )
}

export default Nav
