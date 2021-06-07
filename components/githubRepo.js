import styles from '../styles/components/GithubRepo.module.css';
import { useEffect, useState } from "react";
import AboutHeader from './header';
import ScriptColors from '../scriptColors.json'
import ProjectItemMotion from './projectItemMotion';

export default function GithubRepo({ repoName, image, idx }) {
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
        <ProjectItemMotion
            className={styles.contentElement}
            idx={idx}
        >
            {
                repoData ? <>
                    <div className={styles.repoLanguages}>
                        {
                            colorData.map(({ color, ratio, language }) => (
                                <div key={language} title={language} className={styles.colorData} style={{ backgroundColor: color, flex: ratio }} />

                            ))
                        }
                    </div>
                    <div className={styles.repoContent}>
                        {image && <img className={styles.repoAvatar} src={image} />}
                        <h2>
                            <a className={styles.repoTitle} target="_blank" href={repoData.html_url}>
                                {repoData.name} <i className="fas fa-link" />
                            </a>
                        </h2>
                    </div>
                    <AboutHeader content={repoData.description} />
                </> : <h2>loading...</h2>
            }
        </ ProjectItemMotion>
    );
}