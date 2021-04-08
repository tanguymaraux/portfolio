import styles from './tech.module.scss';

type Props = {
    link:string,
    alt:string,
}

export default function Tech(props:Props) {
    return (
            <div className={styles.tech}>
                <img alt={props.alt} src={props.link} className={styles.logo}/>
            </div>
    )
}