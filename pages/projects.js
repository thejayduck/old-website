import Head from 'next/head'
import styles from '../styles/Projects.module.css'
import Navbar from "./navbar"
import ProjectList from '../components/projectList'
import GithubRepo from '../components/githubRepo'
import ItchioGame from '../components/itchioGame'

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
            <Head>
                <title>TheJayDuck - PROJECTS</title>
                <meta property="og:description" content="Projects Page" />
            </Head>
            <Navbar />
            <div className={`${styles.pageContent} pageContent`}>
                <ProjectList
                    data={games}
                    header="Itch.io Projects"
                    icon="fab fa-itch-io"
                    renderItem={(q, idx) => <ItchioGame key={q.id} data={q} idx={idx} />}
                />                <br />
                {/* <ProjectList
                    data={repos.githubList}
                    header="Github Projects"
                    icon="fab fa-github"
                    renderItem={(q, idx) => <GithubRepo key={q.title} repoName={q.title} image={q.image} idx={idx} />}
                /> */}
            </div>
        </div>
    );
}