import styles from '../styles/Drawings.module.css'
import React from 'react'
import { motion } from 'framer-motion';

export default function ImageData({ data, idx, onClick }) {
    const variants = {
        visible: i => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.3,
                type: "spring",
            },
        }),
        hidden: { y: -20, opacity: 0 }
    }

    return (
        <motion.li
            initial="hidden"
            animate="visible"
            custom={idx}
            key={idx}
            variants={variants}
            className={styles.contentElement}
        >
            <div
                className={styles.image}
                onClick={onClick}
            >
                {data.r18 ? (<img className={styles.imageFilter} src={data.url} />) : (<img src={data.url} />)}
                <div className={styles.warning}>{data.r18 ? (<h1>NSFW</h1>) : <h1 />}</div>
            </div>
            {(!data.social?.length) ? <></> :
                <div className={styles.link}>
                    <ul>
                        {
                            data.social.map((l, idx) =>
                                <li key={idx}>
                                    <a href={l.url} className={l.type} target="_blank" />
                                </li>)
                        }
                    </ul>
                </div>

            }
        </motion.li>
    );
}