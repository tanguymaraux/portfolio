import React from 'react';
import { Fade } from "react-awesome-reveal";
import styles from './navbar.module.scss';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Fade cascade damping={0.2}>
                <a href="#home" id="home_b">Home</a>
                <a href="#about" id="about_b">About</a>
                <a href="#technologies" id="tech_b">Technologies</a>
                <a href="#github" id="projects_b">Projects</a>
                <a href="#footer" id="contact_b">Contact</a>
            </Fade>
        </div>
    )
}