import styles from '../styles/Drawings.module.css'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ImageOverlay from '../components/imageOverlay'
import PageContent from '../components/pageContent'
import ImageData from '../components/imageData'
import React from 'react'

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
            <PageContent>
                <DrawingData data={data.drawingList} onClick={q => setOpenImage(q)} />
            </PageContent>
            <AnimatePresence>{openImage && <ImageOverlay data={openImage} onClick={() => setOpenImage(null)} />}</AnimatePresence>

        </div>
    )
}

function DrawingData({ data, onClick }) {
    return (
        <ul className={styles.contentParent}>
            {
                data.map((q, idx) =>
                    q ? (
                        <ImageData key={idx} data={q} idx={idx} onClick={() => onClick(q.url)} />
                    ) : <p> Nothing to See Here </p>
                )
            }
        </ul>
    );
}