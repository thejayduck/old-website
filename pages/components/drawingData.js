import styles from '../../styles/Drawings.module.css'

export default function DrawingData({ data }) {
    return (
    <div className={styles.column}>
        {
            data.map (q =>
                q ? (
                    <div className={styles.contentElement}>
                        <div className={styles.image}>
                            {/* <h2>{q.title}</h2> */}
                            {q.r18 ? (<img className={styles.imageFilter} src={q.url}/>) : (<img src={q.url}/>)}
                        </div>
                        {/* <div className={styles.tool}>{q.software}<br/>{q.hardware}<br/>{q.resolution}</div> */}
                    </div>
                ) : <p> Nothing to See Here </p>
            )
        }
    </div>
    );
}