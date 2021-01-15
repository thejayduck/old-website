import Head from 'next/head'
import { getGameListData } from '../data'
import styles from '../styles/Projects.module.css'
import Navbar from "./navbar"
import { motion } from 'framer-motion'

export default function Projects({ gameList }) {
    return (
        <div>
            <Head>
                <title>TheJayDuck - PROJECTS</title>
                <meta property="og:description" content="Projects Page" />
            </Head>
            <Navbar />
            <motion.div className={`${styles.pageContent} pageContent`}
                animate={{opacity: [0, 1]}}
            >
                {
                    gameList.map(q =>
                        q !== undefined ? (
                            <div className={styles.contentElement}>
                                <h1>{q.title}</h1>
                                <iframe frameborder="0" src={`https://itch.io/embed/${q.id}?bg_color=000000&fg_color=ffffff&link_color=9D00DA&border_color=000000`}></iframe>
                                <div className={styles.about}>
                                    About<hr/>{q.about}
                                </div>
                                <div className={styles.gameGenre}>
                                    {q.genre}
                                </div>
                            </div>
                        ) : <p> Nothing to See Here </p>
                    )
                }
            </motion.div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    return {
        props: {
            gameList: getGameListData(),
        }
    }
}