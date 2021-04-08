import axios from "axios";
import { useEffect, useState } from "react";
import { JackInTheBox } from "react-awesome-reveal";
import GithubProject from "../../components/GithubProject";
import styles from './github.module.scss';

// TODO: add loop
// TODO: change url to Pilpur

export default function Github() {
    const [projects, setProjects] = useState<any>();

    function fetchProjects(index:any) {
        axios.get('https://api.github.com/users/aureleoules/repos?page=${index}').then(r=>{
            console.log(r.data);
            setProjects(r.data);
        })
    }

    useEffect(()=>{
        fetchProjects(1)  
    }, [])

    return (
        <div id="github">
            <div className={styles.content}>
                <h1>Github Projects</h1>
                <div className={styles.projects}>
                    {
                    projects && projects.map((project:any) => project.name !== "Pilpur"? 
                        <JackInTheBox cascade damping={0.3} triggerOnce>
                            <GithubProject 
                            name={project.name} 
                            description={project.description} 
                            forks={project.forks_count} 
                            langage={project.langage} 
                            stars={project.stargazers_count} 
                            url={project.html_url}/> 
                        </JackInTheBox>: "")
                    }
                </div>
            </div>
        </div>
    )
}