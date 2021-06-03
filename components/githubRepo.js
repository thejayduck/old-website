import styles from '../styles/GithubData.module.css';
import { useEffect, useState } from "react";

export default function GithubRepo({ data, image }) {

    const [repoData, setRepoData] = useState(null);

    useEffect(async () => {
        const res = await fetch(`https://api.github.com/repos/thejayduck/${data}`)
        const jsonData = await res.json();

        setRepoData({
            name: jsonData.name,
            description: jsonData.description,
            html_url: jsonData.html_url,
            language: jsonData.language,
            homepage: jsonData.homepage
        });

    }, [])

    return (
        <div className={styles.contentElement}>
            {
                repoData ? <>
                    <div className={styles.repoContent}>
                        {image && <img className={styles.repoCover} src={image} />}
                        <h2>
                            <a className={styles.repoTitle} target="_blank" href={repoData.html_url}>
                                {repoData.name} <i className="fas fa-link" />
                            </a>
                        </h2>
                    </div>
                    <div className={styles.about}>
                        About<hr />{repoData.description}
                    </div>
                </> : <h2>loading...</h2>
            }


        </div>
    );
}