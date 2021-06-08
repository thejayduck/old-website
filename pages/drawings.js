import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import { useState } from 'react'
import DrawingData from '../components/drawingData'
import ImageOverlay from '../components/imageOverlay'
import styles from '../styles/Drawings.module.css'
import Navbar from "./navbar"

export async function getStaticProps() {
    const res = await fetch('https://gist.githubusercontent.com/thejayduck/50a8e7a15ecad2f1b564e51eb1e1e69c/raw')
    const data = await res.json();

    return {
        props: {
            data
        },
        revalidate: 10
    }
}

export default function Drawings({ data }) {
    const [openImage, setOpenImage] = useState(null);

    return (
        <div>
            <Head>
                <title>TheJayDuck - DRAWINGS</title>
                <meta property="og:description" content="Drawings Page" />
            </Head>
            <Navbar />
            <div className={`${styles.pageContent} pageContent`}>
                <DrawingData data={data.drawingList} onClick={q => setOpenImage(q)} />
                <AnimatePresence>{openImage && <ImageOverlay data={openImage} onClick={() => setOpenImage(null)} />}</AnimatePresence>
            </div>

        </div>
    )
}