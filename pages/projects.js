import Head from 'next/head'
import ItchioData from '../components/itchioData'
import GithubData from '../components/githubData'
import styles from '../styles/Projects.module.css'
import Navbar from "./navbar"

export async function getStaticProps() {
    const res = await fetch('https://gist.githubusercontent.com/thejayduck/50a8e7a15ecad2f1b564e51eb1e1e69c/raw')
    const data = await res.json();

    const key = process.env.ITCH_IO_API_KEY;
    if (key == undefined || key == null)
        throw new Error("No itch.io API Key in Environment");

    const games_res = await fetch(`https://itch.io/api/1/${key}/my-games`);
    const games = (await games_res.json()).games;

    return {
        props: {
            data,
            games
        },
        revalidate: 10
    }
}

export default function Projects({ data, games }) {
    return (
        <div>
            <Head>
                <title>TheJayDuck - PROJECTS</title>
                <meta property="og:description" content="Projects Page" />
            </Head>
            <Navbar />
            <div className={`${styles.pageContent} pageContent`}>
                <ItchioData data={games} />
                <br />
                <GithubData data={data.githubList} />
            </div>
        </div>
    );
}