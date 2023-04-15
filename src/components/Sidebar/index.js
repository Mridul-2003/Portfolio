import './index.scss'
import {Link, NavLink}from 'react-router-dom';
import LogoS from "../../assets/images/logo-s.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faUser,faEnvelope, faProjectDiagram} from "@fortawesome/free-solid-svg-icons"
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import AnimatedCursor from "react-animated-cursor"
const Sidebar = ()=>(
    <div className="nav-bar">
        <AnimatedCursor
                color="255,255,255"
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={1.7}
                outerAlpha={0}
                outerStyle={{
                    border: '3px solid #fff'
                }}
                />
        <Link className = 'logo' to='/'>
            <img src={LogoS} alt="logo"/>
           
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="project-link" to="/project">
                <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
            
        </nav>
        <ul>
            <li>
                <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/mridul-mittal-969a2a1ab/"
                >
                   <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/> 
                </a>
            </li>
            <li>
                <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Mridul-2003"
                >
                   <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/> 
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar