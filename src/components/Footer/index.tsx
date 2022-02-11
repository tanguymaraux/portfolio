import github from '../../assets/icons/github_footer.svg'
import heart from '../../assets/icons/heart.svg'
import insta from '../../assets/icons/insta.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import mail from '../../assets/icons/mail.svg'
import twitter from '../../assets/icons/twitter.svg'
import M from '../../assets/M.svg'
import T from '../../assets/T.svg'
import styles from './footer.module.scss'

export default function Footer() {
    return (
        <div id="footer">
            <div className={styles.content}>
                <div className={styles.logo}>
                    <div className={styles.TM}>
                        <img className={styles.T} alt={'T_logo'} src={T}/>
                        <img className={styles.M} alt={'M_logo'} src={M}/>
                    </div>
                </div>
                
                <h1>Made with <img src={heart} alt="heart"/> by Tanguy Maraux</h1>

                <div className={styles.social}>
                    <a href="mailto:tanguy.maraux@gmail.com"><img src={mail} alt="mail"/></a>
                    <a href="https://www.linkedin.com/in/tanguy-maraux-1555041b0" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin"/></a>
                    <a href="https://github.com/tanguymaraux/" target="_blank" rel="noreferrer"><img src={github} alt="github"/></a>
                    <a href="https://www.instagram.com/guytanlalegende/" target="_blank" rel="noreferrer"><img src={insta} alt="insta"/></a>
                    <a href="https://twitter.com/Guytanlalegende" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter"/></a>
                </div>
            </div>
        </div>
    )
}
