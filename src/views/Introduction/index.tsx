import { Bounce, Fade } from "react-awesome-reveal";
import styles from './introduction.module.scss';

function Introduction() {
    return (
        <div id="home">
            <div className={styles.introduction}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <div className={styles.line}>
                            <div className={styles.word}>
                                <Bounce cascade triggerOnce damping={0.05}>
                                    <h1>H</h1><h1>i</h1><h1>!</h1>
                                </Bounce>
                            </div>
                        </div>
                        <div className={styles.line}>
                            <div className={styles.word}>
                                <Bounce cascade triggerOnce damping={0.05} delay={600}>
                                    <h1>I'</h1><h1>m</h1>
                                </Bounce>
                            </div>
                            <div className={styles.word}>
                                <Bounce cascade triggerOnce damping={0.05} delay={800}>
                                    <h2>T</h2><h2>a</h2><h2>n</h2><h2>g</h2><h2>u</h2><h2>y</h2>
                                </Bounce>
                            </div>
                            <div className={styles.word}>
                                <Bounce cascade triggerOnce damping={0.05} delay={1100}>
                                    <h2>M</h2><h2>a</h2><h2>r</h2><h2>a</h2><h2>u</h2><h2>x</h2><h1>,</h1>
                                </Bounce>
                            </div>
                        </div>
                        <div className={styles.line}>
                            <div className={styles.word}>
                                <Bounce cascade triggerOnce damping={0.05} delay={1800}>
                                    <h1>F</h1><h1>r</h1><h1>e</h1><h1>n</h1><h1>c</h1><h1>h</h1>
                                </Bounce>
                            </div>
                            <div className={styles.word}>
                                <Bounce cascade triggerOnce damping={0.05} delay={2200}>
                                    <h1>I</h1><h1>T</h1>
                                </Bounce>                                    
                            </div>
                            <div className={styles.word}>
                                <Bounce cascade triggerOnce damping={0.05} delay={2310}>
                                    <h1>s</h1><h1>t</h1><h1>u</h1><h1>d</h1><h1>e</h1><h1>n</h1><h1>t</h1>
                                </Bounce>                                    
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <a href="#about">
                            <Fade triggerOnce delay={3000}>
                                <div className={styles.scroll}>
                                        <label>Scroll</label>

                                        <span></span>
                                        <span></span>
                                        <span></span>
                                </div>
                            </Fade>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
