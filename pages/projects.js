import Head from 'next/head'
import GameData  from './components/gameData'
import styles from '../styles/Projects.module.css'
import Navbar from "./navbar"

export async function getStaticProps() {
    const res = await fetch('https://api.jsonbin.io/b/5ffecc0c68f9f835a3dea6bc/1')
    const data = await res.json();

    return {
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