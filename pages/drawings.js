import Head from 'next/head'
import DrawingData from './components/drawingData'
import styles from '../styles/Drawings.module.css'
import Navbar from "./navbar"
// import { motion } from 'framer-motion'

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

export default function Drawings({ data }){
    return(
        <div>
            <Head>
                <title>TheJayDuck - DRAWINGS</title>
                <meta property="og:description" content="Drawings Page" />
            </Head>
            <Navbar/>
            {/* <motion.div className={`${styles.pageContent} pageContent`}
                animate={{ opacity: [0, 1] }}
            ></motion.div> */}
            <div className={`${styles.pageContent} pageContent`}>
                <DrawingData data={data.drawingList} />
            </div>
        </div>
    )
}