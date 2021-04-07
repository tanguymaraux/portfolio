import axios from "axios";
import { useEffect, useState } from "react";
import GithubProject from "../../components/GithubProject";
import styles from './github.module.scss';

export default function Github() {
    const [projects, setProjects] = useState<any>();

    function fetchProjects() {
        axios.get('https://api.github.com/users/Pilpur/repos?page=1').then(r=>{
            console.log(r.data);
            setProjects(r.data)
        })
    }

    useEffect(()=>{
        fetchProjects()  
    }, [])

    return (
        <div id="github">
            <div className={styles.content}>
                <h1>Github Projects</h1>

                <div className={styles.projects}>
                    {
                    projects && projects.map((project:any) => project.name != "Pilpur"? <GithubProject name={project.name} description={project.description} forks={project.forks_count} langage={project.langage} stars={project.stargazers_count} url={project.url}/> : "")
                    }
                </div>
            </div>
        </div>
    )
}