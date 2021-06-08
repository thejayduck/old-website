import styles from '../styles/Drawings.module.css'
import ImageData from './imageData'
import React from 'react'

export default function DrawingData({ data, onClick }) {
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