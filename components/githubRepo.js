import styles from '../styles/components/GithubRepo.module.css';
import { useEffect, useState } from "react";
import ScriptColors from '../scriptColors.json'
import { ProjectItem } from '../pages/projects';

export default function GithubRepo({ repoName, image }) {
    const [repoData, setRepoData] = useState(null);
    const [repoLanguages, setRepoLanguages] = useState([]);
    const [colorData, setColorData] = useState([]);

    useEffect(async () => {
        const res = await fetch(`https://api.github.com/repos/${repoName}`)
        const jsonData = await res.json();

        setRepoData({
            name: jsonData.name,
            description: jsonData.description,
            html_url: jsonData.html_url,
            language: jsonData.language,
            homepage: jsonData.homepage
        });
    }, [])

    useEffect(async () => {
        const res = await fetch(
            `https://api.github.com/repos/${repoName}/languages`
        );
        const jsonData = await res.json();

        setRepoLanguages(jsonData);
    }, []);

    useEffect(async () => {
        if (repoLanguages) {
            const colors = Object.keys(repoLanguages).map(key => ({ color: ScriptColors[key], ratio: repoLanguages[key], language: key }));
            setColorData(colors);
        }
    }, [repoLanguages]);


    return (
        repoData ? <>
            <ProjectItem title={repoData.name} description={repoData.description} cover={image} url={repoData.html_url}>
                <div className={styles.repoLanguages}>
                    {
                        colorData.map(({ color, ratio, language }) => (
                            <div key={language} title={language} className={styles.colorData} style={{ backgroundColor: color, flex: ratio }} />

                        ))
                    }
                </div>
            </ProjectItem>
        </> : <h2>loading...</h2>
    );
}