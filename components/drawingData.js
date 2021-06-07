import styles from '../styles/Drawings.module.css'
import ImageData from './imageData'
import React from 'react'

export default function DrawingData({ data }) {
    return (
        <ul className={styles.contentParent}>
            {
                React.Children.toArray(data.map((q, idx) =>
                    q ? (
                        <ImageData data={q} idx={idx} />
                    ) : <p> Nothing to See Here </p>
                ))
            }
        </ul>
    );
}