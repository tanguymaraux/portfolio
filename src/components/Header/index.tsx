import M from '../../assets/M.svg'
import T from '../../assets/T.svg'
import styles from './header.module.scss'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.T} alt={'T_logo'} src={T}/>
                <img className={styles.M} alt={'M_logo'} src={M}/>
            </div>
        </div>
    )
}