import Head from 'next/head'
import { getDrawingListData } from '../data'
import styles from '../styles/Drawings.module.css'
import Navbar from "./navbar"
import { motion } from 'framer-motion'

export default function Drawings({drawingList}){
    return(
        <div>
            <Head>
                <title>TheJayDuck - DRAWINGS</title>
                <meta property="og:description" content="Drawings Page" />
            </Head>
            <Navbar/>
            <div className={`${styles.pageContent} pageContent`}>
                <div className={styles.column}>
                    {
                        drawingList.map (q => 
                           <motion.div className={styles.contentElement} 
                                animate={{ opacity: [0, 1] }}
                                transition={{duration: .8 }}
                            >                                <div className={styles.image}>
                                    <h2>{q.title}</h2>
                                    <img src={q.url}/>
                                </div>
                                <div className={styles.tool}>{q.software}<br/>{q.hardware}<br/>{q.resolution}</div>
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    return {
        props: {
            drawingList: getDrawingListData(),
        }
    }
}