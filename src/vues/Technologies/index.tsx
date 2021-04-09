import { Bounce, Fade } from "react-awesome-reveal"
import bitcoin from '../../assets/icons/bitcoin.svg'
import c from '../../assets/icons/c.svg'
import csharp from '../../assets/icons/csharp.svg'
import css from '../../assets/icons/css.svg'
import docker from '../../assets/icons/docker.svg'
import flutter from '../../assets/icons/flutter.svg'
import git from '../../assets/icons/git.svg'
import go from '../../assets/icons/go.svg'
import html from '../../assets/icons/html.svg'
import js from '../../assets/icons/javascript.svg'
import linux from '../../assets/icons/linux.svg'
import mysql from '../../assets/icons/mysql.svg'
import python from '../../assets/icons/python.svg'
import react from '../../assets/icons/react.svg'
import sass from '../../assets/icons/sass.svg'
import shell from '../../assets/icons/shell.svg'
import ts from '../../assets/icons/typescript.svg'
import vscode from '../../assets/icons/vscode.svg'
import Tech from '../../components/Technology'
import styles from './technologies.module.scss'

export default function Technologies() {
    return (
        <div id="technologies">
            <div className={styles.content}>
                <Fade cascade triggerOnce>
                    <h1>Technologies</h1>
                    <h2>that I know or am learning and using</h2>
                </Fade>
                <div className={styles.list}>
                    <Bounce cascade damping={0.04}>
                        <Tech link={shell} alt={"shell"}/>
                        <Tech link={linux} alt={"linux"}/>
                        <Tech link={git} alt={"git"}/>
                        <Tech link={vscode} alt={"vscode"}/>
                        <Tech link={c} alt={"c"}/>
                        <Tech link={csharp} alt={"csharp"}/>
                        <Tech link={python} alt={"python"}/>
                        <Tech link={html} alt={"html"}/>
                        <Tech link={css} alt={"css"}/>
                        <Tech link={js} alt={"js"}/>
                        <Tech link={react} alt={"react"}/>
                        <Tech link={ts} alt={"ts"}/>
                        <Tech link={sass} alt={"sas"}/>
                        <Tech link={mysql} alt={"mysql"}/>
                        <Tech link={docker} alt={"docker"}/>
                        <Tech link={go} alt={"go"}/>
                        <Tech link={bitcoin} alt={"bitcoin"}/>
                        <Tech link={flutter} alt={"flutter"}/>
                    </Bounce>
                </div>
            </div>
        </div>
    )
}