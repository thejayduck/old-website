import Head from 'next/head'
import GameData  from './components/gameData'
import styles from '../styles/Projects.module.css'
import Navbar from "./navbar"

export async function getStaticProps() {
    const res = await fetch('https://gist.githubusercontent.com/thejayduck/50a8e7a15ecad2f1b564e51eb1e1e69c/raw')
    const data = await res.json();

    return {
        revalidate: 10,
        props: {
            data
        }
    }
}

export default function Projects({ data }) {
    return (
        <div>
            <Head>
                <title>TheJayDuck - PROJECTS</title>
                <meta property="og:description" content="Projects Page" />
            </Head>
            <Navbar/>
            <div className={`${styles.pageContent} pageContent`}>
                <GameData data={data.gameList} />
            </div>
        </div>
    )
}