import styles from '../styles/GameData.module.css';

export default function GameData({ data }) {
    return (
        <div>
            <h1>Itch.io Projects</h1><hr />
            <div className={styles.contentParent}>
                {
                    data.map(q =>
                        q ? (
                            <div className={styles.contentElement}>
                                <iframe frameborder="0" src={`https://itch.io/embed/${q.id}?bg_color=0a090c&fg_color=ffffff&link_color=a217d9&border_color=43383b`}></iframe>
                                <div className={styles.aboutCover}>
                                    <h2>
                                        <a target="_blank" href={q.url}>
                                            {q.title} <i className="fas fa-link" />
                                        </a>
                                    </h2>
                                    <div className={styles.about}>
                                        About<hr />{q.about}
                                    </div>
                                    <div className={styles.gameGenre}>
                                        {q.genre}
                                    </div>
                                </div>

                            </div>
                        ) : <p> Nothing to See Here </p>
                    )
                }
            </div>
        </div>
    );
}