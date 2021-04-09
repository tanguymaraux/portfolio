import axios from "axios";
import { useEffect, useState } from "react";
import { JackInTheBox } from "react-awesome-reveal";
import GithubProject from "../../components/GithubProject";
import styles from './github.module.scss';

export default function Github() {
    const [projects, setProjects] = useState<Array<any>>(new Array<any>());

    function fetchProjects(index:any) {
        axios.get(`https://api.github.com/users/Pilpur/repos?page=${index}`).then(r=>{
            console.log(r.data);
            setProjects(d => [...d, ...r.data]);
            if(r.data.length === 30)
            {
                fetchProjects(index+1)
            }
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
                    projects && projects.sort(
                        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                        .map((project:any) => (project.language && project.name !== "Pilpur")? 
                        <JackInTheBox cascade damping={0.3} triggerOnce>
                            <GithubProject 
                            name={project.name} 
                            description={project.description} 
                            forks={project.forks_count} 
                            language={project.language} 
                            stars={project.stargazers_count} 
                            url={project.html_url}/> 
                        </JackInTheBox>: "")
                    }
                </div>
                <h2>more coming soon...</h2>
            </div>
        </div>
    )
}