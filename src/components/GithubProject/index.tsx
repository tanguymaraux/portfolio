import fork from '../../assets/icons/fork.svg'
import github from '../../assets/icons/github.svg'
import star from '../../assets/icons/star.svg'
import "./githubproject.scss"

type Props = {
    name:string,
    description:string;
    url:string,
    stars:number,
    forks:number,
    language:string
}

export default function GithubProjet(props:Props) {
    const icon = require("../../assets/icons/" + props.language.toLowerCase() + ".svg")
    return (
        <div className="project">
            <a href={props.url} target="_blank" rel="noreferrer">
                <div className="githubgimg_project">
                    <img src={github} alt="github"/>
                </div>
                <div className="header_project">
                    <img src={icon.default} alt={props.language}/>
                    <h1>{props.name}</h1>
                </div>

                <div className="description_project">
                    <p>{props.description}</p>
                </div>

                <div className="footer_project">
                    <div className="star_project">
                        <img src={star} alt="star"/>
                        <h3>{props.stars}</h3>
                    </div>
                    <div className="fork_project">
                        <img src={fork} alt="fork"/>
                        <h3>{props.forks}</h3>
                    </div>
                </div>
            </a>
        </div>
    )
}