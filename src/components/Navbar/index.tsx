import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import menuicon from '../../assets/icons/menu-icon.svg';
import styles from './navbar.module.scss';
 
export default function Navbar() {

    const matches = useMediaQuery('(min-width: 768px)');

    var [isActive, setActive] = useState<boolean>()
    const handleMenu = () => setActive(!isActive)
    if (matches && isActive) {
        setActive(false);
    }

    return (
        <div className={styles.navbar}>
           { matches||isActive ? 
            <Fade cascade damping={0.2} triggerOnce delay={3000}>
                <a href="#home" id="home_b">Home</a>
                <a href="#about" id="about_b">About</a>
                <a href="#technologies" id="tech_b">Technologies</a>
                <a href="#github" id="projects_b">Projects</a>
                <a href="#footer" id="contact_b">Contact</a>
            </Fade> : ""
            }
            <img onClick={handleMenu} className={styles.icon} src={menuicon} alt="menuicon"/>
        </div>
    )
}
