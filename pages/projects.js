import styles from "../styles/Projects.module.css"

import { motion } from 'framer-motion';

import PageContent from '../components/pageContent'
import AboutHeader, { Header } from '../components/header';
import GithubRepo from '../components/githubRepo';

export async function getStaticProps() {
    //#region Github API
    const res = await fetch('https://gist.githubusercontent.com/thejayduck/50a8e7a15ecad2f1b564e51eb1e1e69c/raw')
    const repos = await res.json();
    //#endregion

    //#region Itch.io API
    const key = process.env.ITCH_IO_API_KEY;
    if (key == undefined || key == null)
        throw new Error("No itch.io API Key in Environment");

    const games_res = await fetch(`https://itch.io/api/1/${key}/my-games`);
    const games = (await games_res.json()).games
        .filter(q => q.published)
        .sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
    //#endregion

    return {
        props: {
            repos,
            games
        },
        revalidate: 10
    }
}

export default function Projects({ repos, games }) {
    return (
        <div>
            <PageContent>
                <ProjectList
                    data={games}
                    header="Itch.io"
                    icon="fab fa-itch-io"
                    key={"itchio"}
                    renderItem={q => <ProjectItem key={q.id} title={q.title} description={q.short_text} cover={q.cover_url} url={q.url} />}
                />
                <ProjectList
                    data={repos.githubList}
                    header="Github"
                    icon="fab fa-github"
                    key={"github"}
                    renderItem={q => <GithubRepo key={q.id} repoName={q.title} image={q.image} />}
                />
            </PageContent>
        </div>
    );
}

export function ProjectItem({ title, description, cover, url, children }) {
    return (
        <motion.li
            className={styles.projectItem}
            initial={{
                y: -20,
                opacity: 0
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{ type: "spring" }}
        >
            <img className={styles.cover} src={cover} />
            <div className={styles.details}>
                <a className={styles.title} target="_blank" href={url} >
                    {title} <i className="fas fa-fw fa-link" />
                </a>
                <AboutHeader content={description} />
            </div>
            {children}
        </motion.li>
    );
}

export function ProjectList({ renderItem, data, header, icon }) {
    return (
        <div>
            <Header title={header} icon={icon} />
            <ul className={styles.projectList} >
                {
                    data.map((q, idx) =>
                        q ? (
                            <div key={idx}>
                                {renderItem(q, idx)}
                            </div>
                        ) : <li> Nothing to See Here </li>
                    )
                }
            </ul>
        </div >
    );
}