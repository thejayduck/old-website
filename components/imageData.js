import styles from '../styles/Drawings.module.css'
import SocialMedia from './socialMedia'
import React from 'react'

export default function ImageData ({ data }){
    return (
        <div className={styles.contentElement}>
            <div className={styles.image}>
                {/* <h2>{data.title}</h2> */}
                {data.r18 ? (<img className={styles.imageFilter} src={data.url}/>) : (<img src={data.url}/>)}
                <div className={styles.warning}>{data.r18 ? (<h1>NSFW</h1>) : <h1/>}</div>
            </div>
            {(!data.social?.length) ? <null/> : 
                    <ul className={styles.link}>
                        {data.social.map(l => <SocialMedia data={l}/>)}
                    </ul> 
            }
            
        </div>
    );
}