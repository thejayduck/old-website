import styles from '../styles/Drawings.module.css'
import React from 'react'

export default function ImageData({ data, index }) {
    return (
        <li key={index} className={styles.contentElement}>
            <div className={styles.image}>
                {data.r18 ? (<img className={styles.imageFilter} src={data.url} />) : (<img src={data.url} />)}
                <div className={styles.warning}>{data.r18 ? (<h1>NSFW</h1>) : <h1 />}</div>
            </div>
            {(!data.social?.length) ? <></> :
                <div className={styles.link}>
                    <ul>
                        {data.social.map((l, idx) => <li key={idx}><a href={l.url} className={`fab fa-${l.type}`} target="_blank" /></li>)}
                    </ul>
                </div>

            }
        </li>
    );
}