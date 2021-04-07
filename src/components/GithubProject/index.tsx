import "./githubproject.scss"

type Props = {
    name:string,
    description:string;
    url:string,
    stars:number,
    forks:number,
    langage:string
}

export default function GithubProjet(props:Props) {
    return (
        <div className="project">
            <p>{props.name}</p>
            <p>{props.description}</p>
        </div>
    )
}