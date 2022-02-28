import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";
import pic from '../../assets/RoundedPic.png';
import styles from './about.module.scss';

const animationPic = keyframes`
  from {
    transform: translateX(-80%);
  }

  to {
    transform: translateX(5%);
  }
`;

const animationTxt = keyframes`
  from {
    opacity: 0;
    transform: translateX(20%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export default function About() {
    return (
        <div id="about">
            <div className={styles.content}>
                <div className={styles.txtdiv}>
                  <Reveal cascade triggerOnce damping={0.05} keyframes={animationTxt} delay={300}>
                      <p>Hello, I'm Tanguy Maraux, a french IT student in 3rd year at <a href="https://www.epita.fr/en" target="_blank" rel="noreferrer">Epita</a>. I develop computer science projects in my free time to improve my skills and learn new things. Besides that, I like to go out with friends and talk about life around a beer. I am also passionate about music and I play the piano and the guitar that I learned by myself.</p>
                  </Reveal>
                </div>

                <div className={styles.picdiv}>
                  <Reveal cascade triggerOnce damping={0.05} keyframes={animationPic} delay={300}>
                      <img src={pic} alt="picture_tanguy" className={styles.pic}/>
                  </Reveal>
                </div>
            </div>
        </div>
    )
}
