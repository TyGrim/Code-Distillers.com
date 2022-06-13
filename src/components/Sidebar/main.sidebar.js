import { Link, NavLink } from 'react-router-dom'
import './main.sidebar.scss'
import LogoCD from '../../assets/Logo-Code-Distillers/LogoOnly.png'
import LogoSubtitle from '../../assets/Logo-Code-Distillers/sub-Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoCD} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Code-Distillers" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
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

export default Sidebar
