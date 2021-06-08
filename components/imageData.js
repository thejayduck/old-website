import styles from '../styles/Drawings.module.css'
import React from 'react'
import ProjectItemMotion from './projectItemMotion';

export default function ImageData({ data, idx, onClick }) {
    return (
        <ProjectItemMotion
            key={idx}
            className={styles.contentElement}
            idx={idx}
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
        </ProjectItemMotion>
    );
}