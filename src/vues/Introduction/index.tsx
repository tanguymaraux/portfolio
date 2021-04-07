import styles from './introduction.module.scss';

function Introduction() {
    return (
        <div id="home">
            <div className={styles.introduction}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <div className={styles.line}>
                            <div className={styles.word}>
                                <h1>H</h1><h1>i</h1><h1>!</h1>
                            </div>
                        </div>
                        <div className={styles.line}>
                            <div className={styles.word}>
                                <h1>I'</h1><h1>m</h1>
                            </div>
                            <div className={styles.word}>
                                <h2>T</h2><h2>a</h2><h2>n</h2><h2>g</h2><h2>u</h2><h2>y</h2>
                            </div>
                            <div className={styles.word}>
                                <h2>M</h2><h2>a</h2><h2>r</h2><h2>a</h2><h2>u</h2><h2>x</h2><h1>,</h1>
                            </div>
                        </div>
                        <div className={styles.line}>
                            <div className={styles.word}>
                                <h1>F</h1><h1>u</h1><h1>l</h1><h1>l</h1><h1>S</h1><h1>t</h1><h1>a</h1><h1>c</h1><h1>k</h1>
                            </div>
                            <div className={styles.word}>
                                <h1>d</h1><h1>e</h1><h1>v</h1><h1>.</h1>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <a href="#about">
                            <div className={styles.scroll}>
                                    <label>Scroll</label>

                                    <span></span>
                                    <span></span>
                                    <span></span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;