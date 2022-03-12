import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import menuicon from "../../assets/icons/menu-icon.svg";
import styles from "./navbar.module.scss";

export default function Navbar() {
  const matches = useMediaQuery("(min-width: 768px)");

  var [isActive, setActive] = useState<boolean>();
  const handleMenu = () => setActive(!isActive);
  if (matches && isActive) {
    setActive(false);
  }

  return (
    <Fade cascade damping={0.2} triggerOnce delay={3000}>
      <div className={styles.navbar}>
        {matches || isActive ? (
          <div className={styles.navbar_menu}>
            <Fade cascade damping={0.1} triggerOnce>
              <a href="#home" id="home_b">
                Home
              </a>
              <a href="#about" id="about_b">
                About
              </a>
              <a href="#technologies" id="tech_b">
                Technologies
              </a>
              <a href="#github" id="projects_b">
                Projects
              </a>
              <a href="#footer" id="contact_b">
                Contact
              </a>
              <a
                href="https://files.tanguymaraux.com/api/public/dl/_tosO_Eh?inline=true"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </Fade>
          </div>
        ) : (
          ""
        )}
        <img
          onClick={handleMenu}
          className={styles.icon}
          src={menuicon}
          alt="menuicon"
        />
      </div>
    </Fade>
  );
}
