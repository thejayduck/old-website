import styles from '../styles/components/GithubData.module.css';
import { useEffect, useState } from "react";
import About from './about';

export default function GithubRepo({ data, image }) {
    const [repoData, setRepoData] = useState(null);
    const [repoLanguages, setRepoLanguages] = useState([]);
    const [colorData, setColorData] = useState([]);

    useEffect(async () => {
        const res = await fetch(`https://api.github.com/repos/${data}`)
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
            `https://api.github.com/repos/${data}/languages`
        );
        const jsonData = await res.json();

        setRepoLanguages(jsonData);
    }, []);

    useEffect(async () => {
        if (repoData && repoLanguages) {
            const res = await fetch(
                `https://api.github.com/gists/564dd064f4eb8688051d55f61d3754ae`
            );
            const jsonData = await res.json();
            const content = JSON.parse(jsonData.files["scriptColors.json"].content);

            const colors = Object.keys(repoLanguages).map(key => ({ color: content[key], ratio: repoLanguages[key], language: key }));

            setColorData(colors);
        }
    }, [repoData, repoLanguages]);


    return (
        <li className={styles.contentElement}>
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
                        {image && <img className={styles.repoCover} src={image} />}
                        <h2>
                            <a className={styles.repoTitle} target="_blank" href={repoData.html_url}>
                                {repoData.name} <i className="fas fa-link" />
                            </a>
                        </h2>
                    </div>
                    <About content={repoData.description} />
                </> : <h2>loading...</h2>
            }
        </li>
    );
}